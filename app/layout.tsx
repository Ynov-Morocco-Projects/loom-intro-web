import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LOOM — AI-Powered HR, Woven Across the Universe of Work",
  description:
    "LOOM unites Human Resources and Artificial Intelligence into one intelligent ecosystem — automating the repetitive, surfacing the meaningful, and connecting every thread of your workforce.",
  openGraph: {
    title: "LOOM — AI-Powered HR Management",
    description:
      "The AI-powered HR platform where human expertise and large language models work as one thread.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
