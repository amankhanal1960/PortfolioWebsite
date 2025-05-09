import type React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/navbar";
const inter = Inter({ subsets: ["latin"] });
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-theme-transition" suppressHydrationWarning>
      <body
        className={`${inter.className} cursor-none min-h-screen bg-background`}
      >
        <Providers>
          <Navbar />
          <main>{children}</main>
          <CustomCursor />
        </Providers>
      </body>
    </html>
  );
}
