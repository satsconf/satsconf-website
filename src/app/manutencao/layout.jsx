import "@/app/globals.css";
import "@/app/styles/all.css";
import Manutencao from "./page";


export const metadata = {
  title: "Satsconf - O Maior Evento 100% Bitcoin do Brasil",
  description: "Pré-venda",
};

export default function ManutencaoLayout({children}) {
 
  return (
    <html lang="pt-BR">
      <body>
          <Manutencao />
       
        </body>
    </html>
  );
}
