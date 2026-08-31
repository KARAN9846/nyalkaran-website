import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import Footer from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import JsonLd from "./JsonLd";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nyalkaran-website.vercel.app"),

  title: "Nyalkaran Technosoft LLP | Software & Web Solutions",

  description:
    "Nyalkaran Technosoft LLP is a digital growth and technology partner helping businesses build websites, software, mobile applications and digital solutions.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Nyalkaran Technosoft LLP | Software & Web Solutions",
    description:
      "Nyalkaran Technosoft LLP is a digital growth and technology partner helping businesses build websites, software, mobile applications and digital solutions.",
    url: "https://nyalkaran-website.vercel.app/",
    siteName: "Nyalkaran Technosoft LLP",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nyalkaran Technosoft LLP - From Idea to Product",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Nyalkaran Technosoft LLP | Software & Web Solutions",
    description:
      "Nyalkaran Technosoft LLP is a digital growth and technology partner helping businesses build websites, software, mobile applications and digital solutions.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${manrope.variable}`}>
        <JsonLd />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
