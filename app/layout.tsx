import type React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";
const inter = Inter({ subsets: ["latin"] });
import { ThemeProvider } from "./providers";
import { ToastContainer } from "react-toastify";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-theme-transition" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>
            {children}
            <ToastContainer />
          </main>
          <CustomCursor />
        </ThemeProvider>
      </body>
    </html>
  );
}
