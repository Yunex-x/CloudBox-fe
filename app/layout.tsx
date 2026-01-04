import type { Metadata } from "next";
import { Outfit, Lato } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});


export const metadata: Metadata = {
  title: "CloudBox ",
  description: "Your Ultimate Cloud Storage Solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${lato.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
