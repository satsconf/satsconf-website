"use client"

import "@/app/globals.css";
import "@/app/styles/all.css";
import Footer from "../components/(landingpage)/footer";
import Header from "../components/(landingpage)/header";
import Manutencao from "./manutencao/page";
import { usePathname } from "next/navigation";
import { metadata } from "./metadata";
// Importa a função de geração de parâmetros


// Função wrapper para gerar parâmetros estáticos
export async function generateStaticParamsWrapper() {
  return generateStaticParams();
}

// Define o layout root com desestruturação de props
export default function RootLayout({ children, params }) {
  const pathname = usePathname();
  const isMaintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true';
  const isHomePage = pathname === "/"; 


 
  console.log('Maintenance Mode:', process.env.NEXT_PUBLIC_MAINTENANCE_MODE);

  return (
    <html lang="pt-BR">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description}></meta>
        <meta name="keywords" content={metadata.keywords}></meta>
        <meta property="og:title" content={metadata.openGraph.title}></meta>
        <meta property="og:description" content={metadata.openGraph.description}></meta>
        <meta property="og:type" content={metadata.openGraph.type}></meta>
        <meta property="og:url" content={metadata.openGraph.url}></meta>
        {metadata.openGraph.images.map((image, index) => (
          <meta key={index} property="og:image" content={image}></meta>
        ))}
      </head>
      <body>
      {isMaintenanceMode && isHomePage ? (
          <Manutencao />
        ) : (
               // Envolve o conteúdo da aplicação com o I18nextProvider
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