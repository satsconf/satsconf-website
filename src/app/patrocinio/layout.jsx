export const metadata = {
    title: "Patrocinio",
    description: "Veja os patrocinadores do Satsconf",
    keywords:['patrocinio satsconf', 'patrocinador satsconf', 'Ingresso SatsConf', 'como adquirir ingresso satsconf btc', 'comprar ingresso btc sp', 'comprar ingresso bitcoin sao paulo', 'evento bitcoin novembro sao paulo'],
    openGraph:{
      title: "Patrocinio - O Maior Evento 100% Bitcoin do Brasil",
      description: "Patrocinio",
      type: "website",
      url: "https://www.satsconf.com.br/patrocinio",
      images: ['https://pbs.twimg.com/profile_banners/1521946346894151682/1710450716/600x200'],
    }
  };
  

export default function PatrocinioLayout({ children }) {
    return (
      <>
      {children}
      </>
    )
  }