"use client";
import { i18n } from './i18n';
import React, { Suspense } from 'react';
import "@/app/globals.css";
import "@/app/styles/all.css";
import Footer from "../components/(landingpage)/footer";
import Header from "../components/(landingpage)/header";
import Manutencao from "./manutencao/page";
import { usePathname } from "next/navigation";
import { metadata } from "./metadata";
//PROVIDERS MODAL NOVIDADES
import { ModalProvider } from "@/providers/ModalContext";
import { DadosProvider } from "@/providers/DadosContext";
import { CookieProvider } from "@/providers/CookieContext";
import Cookies from "@/utils/cookies";

// Define o layout root com desestruturação de props
export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isMaintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true";
  const isHomePage = pathname === "/";

  console.log("Maintenance Mode:", process.env.NEXT_PUBLIC_MAINTENANCE_MODE);

  return (
    <html lang="pt-BR">
      <head>
           {/* Google Tag Manager script */}
<script dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PJ6K67B');`,
          }}
        />


        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description}></meta>
        <meta name="keywords" content={metadata.keywords}></meta>
        <meta property="og:title" content={metadata.openGraph.title}></meta>
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        ></meta>
        <meta property="og:type" content={metadata.openGraph.type}></meta>
        <meta property="og:url" content={metadata.openGraph.url}></meta>
        {metadata.openGraph.images.map((image, index) => (
          <meta key={index} property="og:image" content={image}></meta>
        ))}
      </head>
      <body>
      {/* Google Tag Manager (noscript) */}
<noscript>
  <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PJ6K67B"
height="0" width="0" style="display:none;visibility:hidden"></iframe>
</noscript>

        {isMaintenanceMode && isHomePage ? (
          <Manutencao />
        ) : (
          <Suspense fallback={<div>Carregando...</div>}> 
            <DadosProvider>
              <ModalProvider>
              <CookieProvider>
                <Header />
                {children}
                <Footer />
                <Cookies />
                </CookieProvider>
              </ModalProvider>
            </DadosProvider>
            </Suspense>
        )}
      </body>
    </html>
  );
}

console.log(metadata.title);
