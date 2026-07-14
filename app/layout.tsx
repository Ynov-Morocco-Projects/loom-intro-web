import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import { content, defaultLang } from "@/lib/content";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const defaultContent = content[defaultLang];

export const metadata: Metadata = {
  title: defaultContent.meta.title,
  description: defaultContent.meta.description,
  openGraph: {
    title: defaultContent.meta.ogTitle,
    description: defaultContent.meta.ogDescription,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={defaultLang} className={inter.variable}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
