import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import ModalProvider from "@/providers/ModalProvider";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MM Shop",
  description: "MM Shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
