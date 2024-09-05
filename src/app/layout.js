"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CelDialer from "@/components/CelDialer";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });
const isNome = "sim";


export default function RootLayout({ children }) {
  return (
    <html lang="en" >
        <head>
        <link href="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.css" rel="stylesheet" />
        </head>


      <body className={`${inter.className} bg-white`}>
          <Navbar /> 

          
          <CelDialer />
          <main>{children}</main>
          
          <Footer />
          <script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.js"></script>
      </body>
    </html>
  );
}
