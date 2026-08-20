import nodemailer from "nodemailer";

const gmailUser = process.env.GMAIL_USER;
const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

if (!gmailUser) {
  throw new Error("GMAIL_USER is not configured.");
}

if (!gmailAppPassword) {
  throw new Error("GMAIL_APP_PASSWORD is not configured.");
}

const gmailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailUser,
    pass: gmailAppPassword,
  },
});

type SendCustomerConfirmationEmailParams = {
  to: string;
  subject: string;
  html: string;
};

export async function sendCustomerConfirmationEmail({
  to,
  subject,
  html,
}: SendCustomerConfirmationEmailParams) {
  return gmailTransporter.sendMail({
    from: `Nyalkaran <${gmailUser}>`,
    to,
    subject,
    html,
  });
}
