import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ReduxProvider } from "@/redux/provider";

export const metadata: Metadata = {
  title: "WhatBytes",
  description:
    "Assignment round for the Frontend Developer Intern position at WhatBytes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <ReduxProvider>
          <Navbar />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
