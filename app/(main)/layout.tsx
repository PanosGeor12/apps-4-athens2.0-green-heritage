import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import LoginOutBtn from "@/components/LoginOutButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Green Heritage",
  description: "A project that connects culture with citizens",
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
        <header className="absolute left-0 right-0 top-0 z-50 bg-transparent">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                <span className="text-lg text-white">GH</span>
              </div>
              <span className="text-white">Green Heritage</span>
            </div>
            <LoginOutBtn/>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
