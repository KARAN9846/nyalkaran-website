import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import Footer from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
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
  title: "Nyalkaran Technosoft LLP | Idea to Product",
  description:
    "Nyalkaran Technosoft LLP is a digital growth and technology partner helping businesses build websites, software, mobile applications and digital solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${manrope.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
