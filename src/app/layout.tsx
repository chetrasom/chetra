import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/theme-provider";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "portfolio projects",
  icons: {
    icon: [
      "/favicon.ico?v=4"
    ],
    apple: [
      "/apple-touch-icon.png?v=4"
    ],
    shortcut: [
      "/apple-touch-icon.png"
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>
          {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
