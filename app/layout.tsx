import type { Metadata } from "next";
import { Marcellus } from "next/font/google";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ModalProvider from "@/providers/modal-provider";

import "./globals.css";

const font = Marcellus({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fovere",
  description: "Fovere Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
