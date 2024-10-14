"use client";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';
import ListaConvidadosPaginaInicial from "../listapaginaprincipal";
import BtnNovidades from "../../ui/button/BtnNovidades";

const BoxConvidados = () => {
  const { t } = useTranslation();
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: "Alex Gladstein",
      description: t('speakers.alexG'),
      image: "./alex-gladstein.jpeg",
      skills: "Human Rights Foundation",
      socialMedia: {
        twitter: "https://twitter.com/gladstein",
        linkedin: "",
        nostr: "https://nostr.com/npub1csuq0wzew7r6nynh97vjfamxrcqk70hgk8a3hvqz9ftzuu0sshtsm5xfjj",
        instagram: "",
        youtube: "",
        github: "",
        

      },
    },
    {
      id: 2,
      name: "Niftynei (Lisa)",
      description: t('speakers.niftynei'),
      image: "./niftynei-lisa.png",
      skills: "Base58",
      socialMedia: {
        twitter: "https://x.com/niftynei",
        linkedin: "",
        nostr: "",
        instagram: "",
        youtube: "",
        github: "https://github.com/niftynei",
        
      },
    },
    {
      id: 3,
      name: "Obi Nwosu",
      description: t('speakers.obi'),
      image: "./obiNwosu.jpeg",
      skills: "Fedi",
      socialMedia: {
        twitter: "https://x.com/obi",
        linkedin: "https://www.linkedin.com/in/obinwosu/",
        nostr: "https://nostr.com/npub1kp7jzme0qs3wcqjjmkq6v5fm359sclhc22glhadgtmerlr0h37nsn8487l",
        instagram: "",
        youtube: "",
        github: "",
        
      },
    },
    {
      id: 4,
      name: "Gloria Zhao",
      description: t('speakers.gloriaz'),
      image: "./gloria-zhao.jpg",
      skills: "Bitcoin Core Dev",
      socialMedia: {
        twitter: "https://twitter.com/glozow",
        linkedin: "https://www.linkedin.com/in/glozow/",
        nostr: "",
        instagram: "",
        youtube: "",
        github: "https://github.com/glozow ",
       
      },
    },
    {
      id: 5,
      name: "Carol Souza",
      description: t('speakers.carolSouza'),
      image: "./selfie-carol.jpg",
      skills: "Area Bitcoin",
      socialMedia: {
        twitter: " https://twitter.com/carol_bitcoin",
        linkedin: "",
        nostr: "",
        instagram: "https://www.instagram.com/area.bitcoin/",
        youtube: "https://www.youtube.com/@AreaBitcoin",
        github: "",
       
      },
    },
    {
      id: 6,
      name: "Rapha Zagury",
      description:  t('speakers.raphaZa'),
      image: "./rapha.png",
      skills: "Proton",
      socialMedia: {
        twitter: "https://twitter.com/alphaazeta",
        linkedin: "https://www.linkedin.com/in/rzagury",
        nostr: "http://nostr.com/npub1m3xsmhkcmv20wgaywfeelmvxeww4d67d8sct5cvlffzfa3lkxpus7vdwhx",
        instagram: "",
        youtube: "",
        github: "",
       
      },
    },
    {
      id: 60,
      name: "Raphaël Lima	",
      description: t('speakers.raphaelLima'),
      image: "./raphael-lima.png",
      skills: "Ideias Radicais",
      socialMedia: {
        twitter: "",
        link:"",
        linkedin: "",
        nostr: "",
        instagram: "",
        youtube: "",
        github: "",
       
      },
    },
    {
      id: 8,
      name: "Preston Pysh",
      description: t('speakers.preston'),
      image: "./Preston.png",
      skills: "The Investors Podcast",
      socialMedia: {
        twitter: "https://x.com/prestonpysh",
        linkedin: "https://www.linkedin.com/in/prestonpysh/",
        nostr: "https://nostr.com/npub1s5yq6wadwrxde4lhfs56gn64hwzuhnfa6r9mj476r5s4hkunzgzqrs6q7z",
        instagram: "",
        youtube: "",
        github: "",
        
      },
    },
    {
      id: 9,
      name: "Caio Leta ",
      description:  t('speakers.caioLeta'),
      image: "./caio-leta.jpg",
      skills: "Bipa",
      socialMedia: {
        twitter: "https://twitter.com/caioleta_",
        linkedin: "",
        nostr: "http://nostr.com/npub169jj88ry88e7f6cmcngcz8mu67ak6q6u2pgtcae6wa4ju00z8gts8hac60",
        instagram: "http://instagram.com/caioleta_",
        youtube: "https://www.youtube.com/c/ExplicaBitcoin",
        github: "",
       
      },
    },
    {
      id: 10,
      name: "Diego Kolling",
      description: t('speakers.Diego'),
      image: "./diego-Kolling.png",
      skills: "NodeRunners Brasil",
      socialMedia: {
        twitter: "https://twitter.com/diegokolling",
        linkedin: "",
        nostr: "http://nostr.com/npub1z24p8ghllrl4jxyw8juggm3cfrpn8vvfxxsjzjj4tuaz0qfkeqkstnk760",
        instagram: "",
        youtube: "",
        github: "",
       
      },
    },
    {
      id: 11,
      name: "Margot Paez",
      description: (
        <Trans i18nKey="speakers.margot">
          {/* Este texto padrão será substituído pelo texto no arquivo de localização */}
          <a href="https://geyser.fund/project/minter"></a>
        </Trans>
      ),
      image: "./margot-paez.jpg",
      skills: "Bitcoin Policy Institute",
      socialMedia: {
        twitter: "https://twitter.com/jyn_urso",
        linkedin: "",
        nostr: "https://nostr.com/npub12lzwey2hjc2ce0stwa3ldhg04h93wj263lvdhrf87qfzz9jsggeqwuntw2",
        instagram: "",
        youtube: "",
        github: "",
        
      },
    },
    {
      id: 12,
      name: "Efrat Fenigson",
      description: (
        <Trans i18nKey="speakers.efrat">
          <a href="https://efrat.substack.com"></a>
        </Trans>
      ),
      image: "./Efrat.jpeg",
      skills: "Jornalista e Podcaster",
      socialMedia: {
        twitter: "https://twitter.com/efenigson",
        link: "https://linktr.ee/efenigson ",
        linkedin: "https://www.linkedin.com/in/efrat",
        nostr: "nostr.com/npub1dg6es53r3hys9tk3n7aldgz4lx4ly8qu4zg468zwyl6smuhjjrvsnhsguz",
        instagram: "",
        youtube: "",
        github: "",
        
       
      },
    },
    {
      id: 13,
      name: "Matt Odell",
      description: t('speakers.matt'),
      image: "./matt.jpg",
      skills: "OpenSats / Ten31",
      socialMedia: {
        twitter: "",
        link: "https://odell.xyz/ ",
        linkedin: "",
        nostr: "https://nostr.com/npub1qny3tkh0acurzla8x3zy4nhrjz5zd8l9sy9jys09umwng00manysew95gx",
        instagram: "",
        youtube: "",
        github: "",
       
       
      },
    },
  ]);

  const index = 0;

  return (
    <section id="listaConvidados">
      <div className="bgContainerImgPalestrantes">
        <div className="containerTitlePalestrantes boxTitle ">
          <h2>{t('speakers.titleSpeakers')}</h2>
        </div>
        <div className="listaConvidadosPaginaPrincipal">
          <ListaConvidadosPaginaInicial profiles={profiles} index={index} />
        </div>
        <div className="container-btn-palestrantes">
        <Trans i18nKey="buttons.seeSpeaker" components={[<BtnNovidades url="https://www.satsconf.com.br/palestrantes" />]}>
  
  </Trans>        </div>
      </div>
    </section>
  );
};

export default BoxConvidados;
