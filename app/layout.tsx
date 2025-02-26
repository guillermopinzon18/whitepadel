import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { AuthProvider } from "./AuthContext";
import Footer from "@/components/Footbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "White Padel",
  description: "White Padel",
  icons: {
    icon: "/logonegro.png", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html lang="en">
  <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
    <AuthProvider> {/* Envuelve todo con AuthProvider */}
      <Navbar /> {/* Ahora Navbar tiene acceso al contexto */}
      {children} {/* El contenido principal también tiene acceso al contexto */}
    </AuthProvider>
    <Footer />
  </body>
</html>
  );
}
