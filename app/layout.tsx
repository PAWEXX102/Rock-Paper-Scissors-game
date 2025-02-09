import type { Metadata } from "next";
import { Barlow_Semi_Condensed } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const myFont = Barlow_Semi_Condensed({
  weight: ["600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${myFont.className} antialiased w-svw h-svh`}>
        {children}
      </body>
    </html>
  );
}
