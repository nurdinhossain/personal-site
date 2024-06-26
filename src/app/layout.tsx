import { Short_Stack } from "next/font/google";
import Header from "@/components/header";
import "./globals.css";

const inter = Short_Stack({ subsets: ["latin"], weight: '400' });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={inter.className + " flex flex-col justify-between bg-cyan-100 h-screen"}>
          <Header />
          <main>{children}</main>
          <p className="text-center text-xl">Copyright © 2024 <b>A Bored Techie</b>. All rights reserved.</p>
        </body>
    </html>
  );
}
