import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { ThemeProvider } from "@/context/ThemeContext";
import Footer from "@/components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Huzaifa Shoaib",
  icons: {
    icon: "/dev.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors duration-1000 ease-in-out dark:bg-gray-900 dark:text-white`}
      >
        <div className="grid-background"></div>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen pt-24"> {children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
