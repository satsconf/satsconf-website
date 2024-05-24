"use client"

import "@/app/globals.css";
import "@/app/styles/all.css";
import Footer from "@/components/(landingpage)/footer";
import Header from "@/components/(landingpage)/header";
import Manutencao from "./manutenção/page";
import { usePathname } from "next/navigation";
import { metadata } from "./metadata";



export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isMaintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true';
  const isHomePage = pathname === "/"; 
 
  console.log('Maintenance Mode:', process.env.NEXT_PUBLIC_MAINTENANCE_MODE);

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description}></meta>
      </head>
      <body>
      {isMaintenanceMode && isHomePage ? (
          <Manutencao />
        ) : (
          <>
            <Header />
            {children}
            <Footer />
          </>
        )}
        </body>
    </html>
  );
}

console.log(metadata.title);