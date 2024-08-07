"use client";
import { useState } from "react";
import { Trans, useTranslation } from 'react-i18next';
import Card from "../Card";

//conteudo do modal
const ConvidadosSats = () => {
  const { t } = useTranslation();
  const [profiles, updateProfiles] = useState([
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
      skills: "Swan",
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
      id: 7,
      name: "Giacomo Zucco",
      description: t('speakers.giacomo'),
      image: "./giacomo-zucco.webp",
      skills: "Plan B Network",
      socialMedia: {
        twitter: "https://twitter.com/giacomozucco",
        linkedin: "",
        nostr: "https://nostr.com/npub1au23c73cpaq2whtazjf6cdrmvam6nkd4lg928nwmgl78374kn29sq9t53j",
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
    {
      id: 14,
      name: "André Neves",
      description: t('speakers.andreneves'),
      image: "./andreneves.jpg",
      skills: "ZEBEDEE / Vinteum",
      socialMedia: {
        twitter: "https://twitter.com/andreneves",
        linkedin: "https://www.linkedin.com/in/andrerfneves/",
        nostr: "nostr.com/npub1rvg76s0gz535txd9ypg2dfqv0x7a80ar6e096j3v343xdxyrt4ksmkxrck ",
        instagram: "",
        youtube: "",
        github: "https://github.com/andrerfneves",
       
      },
    },
    {
      id: 15,
      name: "Kaká Furlan",
      description: t('speakers.kakaFu'),
      image: "./selfie-kaka.jpg",
      skills: "Area Bitcoin",
      socialMedia: {
        twitter: "https://twitter.com/kakafurlan",
        linkedin: "",
        nostr: "",
        instagram: "https://www.instagram.com/area.bitcoin/",
        youtube: "https://www.youtube.com/@AreaBitcoin ",
        github: "",
       
      },
    },
    {
      id: 16,
      name: "Amiti Uttarwar",
      description: t('speakers.amiti'),
      image: "./emiti.png",
      skills: "Bitcoin Core Dev",
      socialMedia: {
        twitter: "https://twitter.com/amizi",
        link:"",
        linkedin: "https://www.linkedin.com/in/amiti-uttarwar/",
        nostr: "",
        instagram: "",
        youtube: "",
        github: "https://github.com/amitiuttarwar",
       
      },
    },
    {
      id: 17,
      name: "Ben Arc",
      description: t('speakers.ben'),
      image: "./benarc.jpg",
      skills: "LNbits",
      socialMedia: {
        twitter: "https://twitter.com/arcbtc",
        link:"",
        linkedin: "",
        nostr: "https://nostr.com/npub1c878wu04lfqcl5avfy3p5x83ndpvedaxv0dg7pxthakq3jqdyzcs2n8avm",
        instagram: "",
        youtube: "",
        github: "https://github.com/arcbtc",
       
      },
    },
    
    {
      id: 18,
      name: "Bruno Garcia",
      description:  t('speakers.brunoGar'),
      image: "./bruno-garcia.jpeg",
      skills: "Bitcoin Core Dev",
      socialMedia: {
        twitter: "https://twitter.com/brrrunog ",
        linkedin: "",
        nostr: "https://www.nostr.com/npub12a6hhhcn3lvhehzm7wgx44jjh4cvu2djj0txezentawumdk5ky8qquclwp ",
        instagram: "",
        youtube: "",
        github: "https://github.com/brunoerg ",
       
      },
    },
    
    {
      id: 19,
      name: "Lucas Ferreira",
      description: t('speakers.lucasFe'),
      image: "./lucas-ferreira.jpg",
      skills: "Lightning Labs / Vinteum",
      socialMedia: {
        twitter: "https://twitter.com/lucasdcf",
        link:"",
        linkedin: "",
        nostr: "http://nostr.com/npub1pumdyz7qfu0suamv4nrl0vcg574dtl5mwazva6nyjxhpwc4ccxxqca3ane",
        instagram: "",
        youtube: "",
        github: "",
       
      },
    },
    {
      id: 20,
      name: "Madu",
      description: t('speakers.madu'),
      image: "./madulobato.jpg",
      skills: "Blink / Brasil Bitcoin",
      socialMedia: {
        twitter: "https://twitter.com/eduardalobatoo",
        link:"",
        linkedin: "",
        nostr: "http://nostr.com/npub1p9auvqfn3dtrjnwkhxdvvk6xn3tt8aa2uv4dh2af42nv9z8nh0msrjvmhp",
        instagram: "https://www.instagram.com/eduardalobato/",
        youtube: "",
        github: "",
       
      },
    },
    
   
    {
      id: 21,
      name: "Steven Roose",
      description: t('speakers.steven'),
      image: "./steven-roose.jpeg",
      skills: "Ark",
      socialMedia: {
        twitter: "https://twitter.com/stevenroose3",
        linkedin: "",
        nostr: "",
        instagram: "",
        youtube: "",
        github: "https://github.com/stevenroose",
       
      },
    },
    {
      id: 22,
      name: "Ivy Galindo",
      description: t('speakers.ivyGalindo'),
      image: "./ivy-galindo.jpg",
      skills: "Swan",
      socialMedia: {
        twitter: "https://twitter.com/ivygalindo_",
        link:"https://vida.page/ivygalindo",
        linkedin: "",
        nostr: "",
        instagram: "",
        youtube: "",
        github: "",
       
      },
    },
    {
      id: 23,
      name: "Shinobi",
      description: t('speakers.shinobi'),
      image: "./shinobi.png",
      skills: "Bitcoin Magazine",
      socialMedia: {
        twitter: "https://twitter.com/brian_trollz_",
        link:"https://bitcoinmagazine.com/authors/shinobi ",
        linkedin: "",
        nostr: "nostr.com/npub1xapjgsushef5wwn78vac6pxuaqlke9g5hqdfjlanky3uquh0nauqx0cnde ",
        instagram: "",
        youtube: "",
        github: "",
       
      },
    },
    {
      id: 24,
      name: "Erik Hersman",
      description: t('speakers.erik'),
      image: "./erik.png",
      skills: "Gridless",
      socialMedia: {
        twitter: "https://x.com/whiteafrican_",
        link:"",
        linkedin: "https://www.linkedin.com/in/erikhersman/",
        nostr: "",
        instagram: "",
        youtube: "",
        github: "",
       
      },
    },
    {
      id: 25,
      name: "Jorge Jraissati",
      description: 
      (
        <Trans i18nKey="speakers.jorgej">
          <a href="https://x.com/Econ_Inclusion"></a>
        </Trans>
      ),
      image: "./jorgej.png",
      skills: "Economic Inclusion Group",
      socialMedia: {
        twitter: "https://x.com/JraissatiJorge",
        link:"",
        linkedin: "https://www.linkedin.com/in/jorgejraissati/",
        nostr: "",
        instagram: "",
        youtube: "",
        github: "",
       
      },
    },
    {
      id: 26,
      name: "Adam Nili",
      description: t('speakers.adam'),
      image: "./adam.jpg",
      skills: "Mi Primer Bitcoin",
      socialMedia: {
        twitter: "https://x.com/adam_nili",
        link:"",
        linkedin: "https://www.linkedin.com/in/adam-nili-a812a8208/?originalSubdomain=pr",
        nostr: "",
        instagram: "",
        youtube: "",
        github: "",
       
      },
    },
    {
      id: 27,
      name: "Alex Leishman",
      description: t('speakers.alexleishman'),
      image: "./alexleis.png",
      skills: "River",
      socialMedia: {
        twitter: "https://twitter.com/Leishman",
        link:"",
        linkedin: "https://www.linkedin.com/in/alexanderleishman/",
        nostr: "",
        instagram: "",
        youtube: "",
        github: "https://github.com/leishman",
       
      },
    },
    {
      id: 28,
      name: "Javier Bastardo",
      description: 
      (
        <Trans i18nKey="speakers.javier">
          <a href="https://twitter.com/satoshienvzla"></a>
        </Trans>
      ),
      image: "./Javier.jpeg",
      skills: "Tether / Bitfinex",
      socialMedia: {
        twitter: "https://x.com/criptobastardo",
        link:"",
        linkedin: "",
        nostr: "nostr.com/npub1xyfx9tq5a7msz8erygakv24p7x9nhd7z8qsxevwqwsj0q5dprn8q6uvp67 ",
        instagram: "",
        youtube: "",
        github: "",
       
      },
    },
    {
      id: 29,
      name: "Roger Huang",
      description: t('speakers.roger'),
      image: "./roger.png",
      skills: "BTC Magazine / Would Mao Hold Bitcoin",
      socialMedia: {
        twitter: "https://x.com/Rogerh1991",
        link:"https://www.forbes.com/sites/rogerhuang/",
        linkedin: "",
        nostr: "https://nostr.com/npub12qxvc5evxqt3rky25mfskywugalx5vnhppfl32cu903cnwpyu0uqkmq8u9",
        instagram: "",
        youtube: "",
        github: "",
       
      },
    },
  
   
    
  ]);
  
  return (
    <div className="profile-card">
      {profiles.map((profile, index) => {
        return (
          <Card
            key={profile.id}
            id={profile.id}
            name={profile.name}
            skills={profile.skills}
            description={profile.description}
            image={profile.image}
            twitter={profile.socialMedia.twitter}
            link={profile.socialMedia.link}
            linkedin={profile.socialMedia.linkedin}
            nostr={profile.socialMedia.nostr}
            instagram={profile.socialMedia.instagram}
             youtube={profile.socialMedia.youtube}
            github={profile.socialMedia.github}
            className={index < 3 ? "palestrante-destaque " : "palestrante-global"}
          />
        );
      })}
    </div>
  );
};

export default ConvidadosSats;
