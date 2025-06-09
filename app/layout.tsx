import type React from "react";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";
import { ThemeProvider } from "./providers";
import { ToastContainer } from "react-toastify";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-theme-transition" suppressHydrationWarning>
      <body className={`${playfair.className}`}>
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
