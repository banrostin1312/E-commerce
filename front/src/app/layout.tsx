import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
//components
import { NaviBar } from "@/components/navbar/NaviBar";
import { Footerr } from "@/components/footer/FooterCommerce";
import GlobalCart from "@/components/globalCart/GlobalCart";
//providers
import { AuthProvider } from "@/contexts/AuthContext";
import { CartProvider } from "@/contexts/CartContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
        <CartProvider>
        <NaviBar/>
        {children}
        <GlobalCart/>
        <Footerr/>
        </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
