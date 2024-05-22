import type { Metadata } from "next";
import { Short_Stack } from "next/font/google";
import "./globals.css";

const inter = Short_Stack({ subsets: ["latin"], weight: '400' });

export const metadata: Metadata = {
  title: "A Bored Techie",
  description: "I was bored.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
