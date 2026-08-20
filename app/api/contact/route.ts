import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { prisma } from "@/lib/db/prisma";
import { buildContactNotificationEmail } from "@/lib/email/contact-notification";
import { buildContactConfirmationEmail } from "@/lib/email/contact-confirmation";
import { sendCustomerConfirmationEmail } from "@/lib/email/gmail";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Please enter a valid email address."),
  company: z.string().trim().optional().default(""),
  phone: z.string().trim().optional().default(""),
  service: z.string().trim().min(1, "Please select a service."),
  message: z
    .string()
    .trim()
    .min(20, "Please tell us a little more about your project."),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Please check the submitted information.",
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const { name, email, company, phone, service, message } = result.data;

    /*
     * Find the Nyalkaran company.
     *
     * We use the existing company record that we created
     * in Supabase during the database setup.
     */
    const ownerCompany = await prisma.company.findFirst({
      where: {
        name: "Nyalkaran",
      },
      select: {
        id: true,
      },
    });

    if (!ownerCompany) {
      return NextResponse.json(
        {
          success: false,
          message: "Company configuration is missing.",
        },
        { status: 500 },
      );
    }

    /*
     * Create the enquiry and its initial event
     * in one database transaction.
     */
    const enquiry = await prisma.$transaction(async (tx) => {
      const createdEnquiry = await tx.enquiry.create({
        data: {
          companyId: ownerCompany.id,
          name,
          email,
          companyName: company || null,
          phone: phone || null,
          service,
          message,
          status: "new",
          source: "website",
        },
      });

      await tx.enquiryEvent.create({
        data: {
          enquiryId: createdEnquiry.id,
          eventType: "enquiry_created",
          metadata: {
            source: "website",
            service,
          },
        },
      });

      return createdEnquiry;
    });

    /*
     * Build the professional Nyalkaran notification email.
     */
    const html = buildContactNotificationEmail({
      name,
      email,
      company,
      phone,
      service,
      message,
      enquiryId: enquiry.id,
    });

    /*
     * Send the notification email to the configured
     * Nyalkaran notification address.
     */
    const { error: emailError } = await resend.emails.send({
      from: "Nyalkaran Website <onboarding@resend.dev>",
      to: [process.env.CONTACT_NOTIFICATION_EMAIL!],
      subject: `New ${service} Enquiry — ${name}`,
      html,
    });

    const confirmationHtml = buildContactConfirmationEmail({
      name,
      email,
      company,
      service,
      enquiryId: enquiry.id,
    });

    try {
      await sendCustomerConfirmationEmail({
        to: email,
        subject: "Thank you for contacting Nyalkaran",
        html: confirmationHtml,
      });
    } catch (confirmationEmailError) {
      console.error(
        "Customer confirmation email error:",
        confirmationEmailError,
      );
    }

    /*
     * The enquiry has already been saved successfully.
     * If email sending fails, report that separately.
     */
    if (emailError) {
      console.error("Resend email error:", emailError);

      return NextResponse.json(
        {
          success: false,
          message:
            "Your enquiry was saved, but the notification email could not be sent.",
          enquiryId: enquiry.id,
        },
        { status: 500 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your enquiry has been submitted successfully.",
        enquiryId: enquiry.id,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while submitting your enquiry.",
      },
      { status: 500 },
    );
  }
}
