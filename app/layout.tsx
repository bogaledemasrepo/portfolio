import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "full-stack js developer portfolio web application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`mono dark:bg-slate-950/90`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
