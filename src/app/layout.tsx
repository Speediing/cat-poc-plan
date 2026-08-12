import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { content } from "@/lib/content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.thesis,
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} bg-canvas text-ink antialiased`}>
        {children}
      </body>
    </html>
  );
}
