import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact | A Bored Techie",
    description: "Contact page for Nurdin Hossain's website; Send a message along with your name and email.",
  };

  export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
        {children}
      </>
    );
  }