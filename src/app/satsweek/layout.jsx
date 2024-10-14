export const metada = {
    title: "SatsWeek",
    description:" Evento SatsWeek.",
    keywords:['edição satsconf 2024', 'evento sats conf', 'evento satsconf', 'satsparty', 'imagens do evento satsparty', 'satsparty sao paulo'],
    openGraph:{
      title: "SatsWeek - O Maior Evento 100% Bitcoin do Brasil",
      description: "Entre no novo mundo com a gente!",
      type: "website",
      url: "https://www.satsconf.com.br/satsweek",
      images: ['https://pbs.twimg.com/profile_banners/1521946346894151682/1710450716/600x200'],
    }
};

export default function SatsWeekLayout({ children }) {
    return (
        <>
        {children}
        </>
    )
}