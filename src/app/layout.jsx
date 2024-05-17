import "@/app/globals.css";
import "@/app/styles/all.css";
import Footer from "@/components/(landingpage)/footer";
import Header from "@/components/(landingpage)/header";
import Manutencao from "./manutenção/page";


export const metadata = {
  title: "Satsconf - O Maior Evento 100% Bitcoin do Brasil",
  description: "Pré-venda",
};

export default function RootLayout({ children }) {
  const isMaintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'false';
  return (
    <html lang="en">
      <body>
      {isMaintenanceMode ? (
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
