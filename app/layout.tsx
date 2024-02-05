import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import { Cart } from "@/lib/features/cart/Cart";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Small Ecommerce Store",
  description: "A small ecommerce store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>
          <nav className="flex align-center justify-between w-full mt-8 p-8">
            <Link className="font-mono" href={"/"}>Small Ecommerce Store</Link>
            <Cart />
          </nav>
          <hr className="mx-8"/>
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
