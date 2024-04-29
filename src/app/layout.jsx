import "./globals.css";
import "@/app/styles/all.css";
import Footer from "@/components/(landingpage)/footer";
import Navbar from "@/components/navbar";


export const metadata = {
  title: "Satsconf - O Maior Evento 100% Bitcoin do Brasil",
  description: "Pré-venda",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}

        <Footer />
        </body>
    </html>
  );
}
