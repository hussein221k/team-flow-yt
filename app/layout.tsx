import type { Metadata } from "next";
import "./globals.css"
import { ThemeProvider } from "@/lib/theme-provider";
import { AuthProvider } from "./AuthProvider";


export const metadata : Metadata = {
  title: 'Kinde Auth',
  description: 'Kinde with Next.js App Router'
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </AuthProvider>
  );
}
