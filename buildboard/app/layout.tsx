import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AuthToggleProvider } from "@/context/AuthToggleContext"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home | Buildboard",
  description: "By Loveday",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthToggleProvider>
        {children}
        </AuthToggleProvider>
      </body>
    </html>
  );
}
