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
    // {
    //   id: 7,
    //   name: "Giacomo Zucco",
    //   description: t('speakers.giacomo'),
    //   image: "./giacomo-zucco.webp",
    //   skills: "Plan B Network",
    //   socialMedia: {
    //     twitter: "https://twitter.com/giacomozucco",
    //     linkedin: "",
    //     nostr: "https://nostr.com/npub1au23c73cpaq2whtazjf6cdrmvam6nkd4lg928nwmgl78374kn29sq9t53j",
    //     instagram: "",
    //     youtube: "",
    //     github: "",
        
    //   },
    // },
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
      skills: "Bipa",
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
    // {
    //   id: 17,
    //   name: "Ben Arc",
    //   description: t('speakers.ben'),
    //   image: "./benarc.jpg",
    //   skills: "LNbits",
    //   socialMedia: {
    //     twitter: "https://twitter.com/arcbtc",
    //     link:"",
    //     linkedin: "",
    //     nostr: "https://nostr.com/npub1c878wu04lfqcl5avfy3p5x83ndpvedaxv0dg7pxthakq3jqdyzcs2n8avm",
    //     instagram: "",
    //     youtube: "",
    //     github: "https://github.com/arcbtc",
       
    //   },
    // },
    
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
    // {
    //   id: 26,
    //   name: "Adam Nili",
    //   description: t('speakers.adam'),
    //   image: "./adam.jpg",
    //   skills: "Mi Primer Bitcoin",
    //   socialMedia: {
    //     twitter: "https://x.com/adam_nili",
    //     link:"",
    //     linkedin: "https://www.linkedin.com/in/adam-nili-a812a8208/?originalSubdomain=pr",
    //     nostr: "",
    //     instagram: "",
    //     youtube: "",
    //     github: "",
       
    //   },
    // },
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
    {
      id: 30,
      name: "Hannah Rosenberg",
      description: t('speakers.hannah'),
      image: "./Hannah.jpg",
      skills: "Lightning Labs",
      socialMedia: {
        twitter: "https://x.com/hmichellerose",
        link:"",
        linkedin: "https://www.linkedin.com/in/hannahmr/ ",
        nostr: "",
        instagram: "",
        youtube: "",
        github: "",
       
      },
    },
    {
      id: 31,
      name: "Josef Tětek ",
      description: t('speakers.josefT'),
      image: "./Josef.jpg",
      skills: "Trezor Academy",
      socialMedia: {
        twitter: "https://x.com/JosefTetek",
        link:"https://braiins.com/books/bitcoin-separation-of-money-and-state",
        linkedin: " ",
        nostr: "",
        instagram: "",
        youtube: "",
        github: "",
       
      },
    },
    {
      id: 32,
      name: "Kgothatso Ngako ",
      description: t('speakers.kgothatso'),
      image: "./Kgothatso.jpeg",
      skills: "Machankura",
      socialMedia: {
        twitter: "",
        link:"",
        linkedin: " ",
        nostr: "https://nostr.com/npub1773r2y5zl3sa7xufmye96un3hf02rse8j82hkd45ps0wvk2hrkasslesjt",
        instagram: "",
        youtube: "",
        github: "",
       
      },
    },
    {
      id: 33,
      name: "Fernando Motolese",
      description: t('speakers.fernandoMotolese'),
      image: "./FernandoMotolese.jpeg",
      skills: "Praia Bitcoin / Bitcoinize",
      socialMedia: {
        twitter: "https://x.com/motoleseoficial ",
        link:"https://Bitcoinize.com",
        linkedin: "",
        nostr: "",
        instagram: "",
        youtube: "",
        github: "",
       
      },
    },
    {
      id: 34,
      name: "André Loja",
      description: t('speakers.freeMadeira'),
      image: "./andreLoja.jpg",
      skills: "Free Madeira",
      socialMedia: {
        twitter: "https://x.com/andreloja",
        link:"",
        linkedin: "",
        nostr: "https://nostr.com/npub1tdc9um9kqfp9cqvjqtwswzsvqzdsgzkpn9swamed3286kfwpaljsrr8r0y",
        instagram: "",
        youtube: "",
        github: "",
       
      },
    },
    {
      id: 35,
      name: "Ayelen Osorio",
      description: t('speakers.AyelenHRF'),
      image: "./Ayelenphoto.jpg",
      skills: "HRF",
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
      id: 36,
      name: "Lorena Almada",
      description: t('speakers.LorenaAlmada'),
      image: "./lorenaAlmada.png",
      skills: "Bitcoin Beach / OnchainSchool",
      socialMedia: {
        twitter: "https://x.com/lorenaalmadag",
        link:"",
        linkedin: "",
        nostr: "",
        instagram: "https://www.instagram.com/galmadalorena/",
        youtube: "https://www.youtube.com/@bitlorena",
        github: "",
       
      },
    },
    {
      id: 37,
      name: "Agustin Kassis",
      description: t('speakers.Agustin'),
      image: "./agustinKassis.jpeg",
      skills: "La Crypta",
      socialMedia: {
        twitter: "https://x.com/agustin_kassis",
        link:"",
        linkedin: "",
        nostr: "",
        instagram: "",
        youtube: "",
        github: "https://github.com/agustinkassis",
       
      },
    },
    {
      id: 38,
      name: "Mariano Perez Rodriguez",
      description: t('speakers.marianoPerez'),
      image: "./marianoPerez.jpg",
      skills: "La Crypta",
      socialMedia: {
        twitter: "",
        link:"",
        linkedin: "",
        nostr: "",
        instagram: "",
        youtube: "",
        github: "https://github.com/mariano-perez-rodriguez",
       
      },
    },
    {
      id: 39,
      name: "Juan José Ramirez ",
      description: t('speakers.juanJose'),
      image: "./juanJoseRamirez.jpg",
      skills: "La Crypta",
      socialMedia: {
        twitter: "https://x.com/JuanJoseBTC",
        link:"",
        linkedin: "https://www.linkedin.com/in/jramireznieves/",
        nostr: "https://nostr.com/npub1kce2jpe7svm6y2yknart4k4vd6cqxh22fcy06d7gyd2ayc64nggsw5r9z7",
        instagram: "",
        youtube: "",
        github: "https://github.com/jjramirezn",
       
      },
    },
    {
      id: 40,
      name: "Bernardo Braga",
      description: t('speakers.bernadoBraga'),
      image: "./BernardoBraga.jpg",
      skills: "BetterMoney",
      socialMedia: {
        twitter: "https://www.x.com/eubernardobraga/",
        link:"https://www.bettermoney.life/bitcoin360/",
        linkedin: "",
        nostr: "",
        instagram: "https://www.instagram.com/eubernardobraga/",
        youtube: "https://www.youtube.com/@canalbettermoney/",
        github: "",
       
      },
    },
    {
      id: 41,
      name: "Lorena Ortiz ",
      description: t('speakers.lorenaOrtiz'),
      image: "./lorenaOrtiz.jpg",
      skills: "Fedi",
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
      id: 42,
      name: "Aleks Svetski",
      description: t('speakers.aleksSvetski'),
      image: "./aleksSvetski.jpeg",
      skills: "Satlantis",
      socialMedia: {
        twitter: "http://x.com/svetskiwrites",
        link:"https://satlantis.io/",
        linkedin: "",
        nostr: "https://nostr.com/npub1dtgg8yk3h23ldlm6jsy79tz723p4sun9mz62tqwxqe7c363szkzqm8up6mal",
        instagram: "",
        youtube: "",
        github: "",
       
      },
    },
    {
      id: 43,
      name: "José Storopoli ",
      description: t('speakers.joseStoropoli'),
      image: "./joseStoropoli.jpeg",
      skills: "Alpen Labs",
      socialMedia: {
        twitter: "",
        link:"",
        linkedin: "",
        nostr: "",
        instagram: "",
        youtube: "",
        github: "https://github.com/storopoli",
       
      },
    },
    {
      id: 44,
      name: "Níckolas Goline ",
      description: t('speakers.nickolasGoline'),
      image: "./nickolasGoline.png",
      skills: "NLightning",
      socialMedia: {
        twitter: "https://x.com/nGoline",
        link:"",
        linkedin: "https://linkedin.com/in/nGoline",
        nostr: "",
        instagram: "",
        youtube: "",
        github: "https://github.com/nGoline",
       
      },
    },
    {
      id: 45,
      name: "Ella Hough",
      description: t('speakers.ellaHought'),
      image: "./EllaCroppedHeadshot.png",
      skills: "Bitcoin Students Network",
      socialMedia: {
        twitter: "https://x.com/21MMforthe21st",
        link:"https://www.bitcoinstudentsnetwork.org/",
        linkedin: "",
        nostr: "https://nostr.com/npub1z5umqa38xfv94y3fpver2khw2qar2v54jetl24939j4f0yyhggdqrh5lwd",
        instagram: "",
        youtube: "",
        github: "",
       
      },
    },
    {
      id: 46,
      name: "Davidson Souza ",
      description: t('speakers.davisonSouza'),
      image: "./davidsonSouza.png",
      skills: "Floresta/Utreexo",
      socialMedia: {
        twitter: "",
        link:"https://blog.dlsouza.lol/",
        linkedin: "",
        nostr: "https://nostr.com/npub1ur8m24ya8nmakn38xmuwr0yy7cjgdtm6gy54mpnudgcngkgyy55qxc58yl",
        instagram: "",
        youtube: "",
        github: "https://github.com/Davidson-Souza",
       
      },
    },
    {
      id: 47,
      name: "Odudex ",
      description: t('speakers.odudex'),
      image: "./odudex.jpeg",
      skills: "Krux",
      socialMedia: {
        twitter: "https://x.com/odudex",
        link:"",
        linkedin: "",
        nostr: "",
        instagram: "",
        youtube: "",
        github: "https://github.com/odudex",
       
      },
    },
    {
      id: 48,
      name: "Rudá Pellini ",
      description: t('speakers.rudaPellini'),
      image: "./rudaPellini.jpeg",
      skills: "Arthur Inc.",
      socialMedia: {
        twitter: "",
        link:"",
        linkedin: "https://www.linkedin.com/in/rudapellini/",
        nostr: "",
        instagram: "https://www.instagram.com/rudapellini/",
        youtube: "",
        github: "",
       
      },
    },
    {
      id: 49,
      name: "Alexandre Vasarhelyi  ",
      description: t('speakers.AlexandreCrypto'),
      image: "./AlexandreCrypto.jpeg",
      skills: "B2V Crypto",
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
      id: 50,
      name: "Jão Noctus ",
      description: t('speakers.joaoNoctus'),
      image: "./joaonoctus.jpg",
      skills: "ZEBEDEE",
      socialMedia: {
        twitter: "",
        link:"http://jaonoctus.dev",
        linkedin: "",
        nostr: "",
        instagram: "",
        youtube: "",
        github: "",
       
      },
    },
    {
      id: 51,
      name: "Super Testnet ",
      description: t('speakers.superTestnet'),
      image: "./SuperTestnet.png",
      skills: "PlebLab",
      socialMedia: {
        twitter: "https://twitter.com/super_testnet/",
        link:"",
        linkedin: "",
        nostr: "",
        instagram: "",
        youtube: "",
        github: "https://github.com/supertestnet",
       
      },
    },
    {
      id: 52,
      name: "Marcel Pechman",
      description: t('speakers.marcelPechman'),
      image: "./MarcelPechman.jpg",
      skills: "Cointelegraph US",
      socialMedia: {
        twitter: "https://x.com/radarbtc",
        link:"",
        linkedin: "",
        nostr: "",
        instagram: "",
        youtube: "https://www.youtube.com/@RadarBTC",
        github: "",
       
      },
    },
    {
      id: 53,
      name: "Matyáš Kuchař ",
      description: t('speakers.pragueBTC'),
      image: "./pragueBTC.jpeg",
      skills: "BTC Prague/Chaincamp",
      socialMedia: {
        twitter: "https://x.com/Matyas44Cook",
        link:"",
        linkedin: "",
        nostr: "",
        instagram: "",
        youtube: "",
        github: "",
       
      },
    },
    {
      id: 54,
      name: "Nicolas Cabrera",
      description: t('speakers.NicolasCabrera'),
      image: "./NicolasCabrera.jpg",
      skills: "Lightspark",
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
    // {
    //   id: 55,
    //   name: "Lizzy Eisenberg",
    //   description: t('speakers.lizzyEisenberg'),
    //   image: "./LizzyEisenberg.jpg",
    //   skills: "Ligthspark",
    //   socialMedia: {
    //     twitter: "",
    //     link:"",
    //     linkedin: "",
    //     nostr: "",
    //     instagram: "",
    //     youtube: "",
    //     github: "",
       
    //   },
    // },
    {
      id: 56,
      name: "Namcios",
      description: t('speakers.namcios'),
      image: "./Namcios.png",
      skills: "UTXO Management",
      socialMedia: {
        twitter: "https://twitter.com/namcios",
        link:"",
        linkedin: "",
        nostr: "",
        instagram: "",
        youtube: "",
        github: "",
       
      },
    },
    {
      id: 57,
      name: "Lorenzo Maturano",
      description: t('speakers.lorenzo'),
      image: "./lorenzoMaturano.jpg",
      skills: "Bipa",
      socialMedia: {
        twitter: "https://twitter.com/lorenzo_lfm",
        link:"",
        linkedin: "https://www.linkedin.com/in/lorenzo-maturano-55429b181/",
        nostr: "",
        instagram: "",
        youtube: "",
        github: "",
       
      },
    },
    {
      id: 58,
      name: "Conor Okus",
      description: t('speakers.conorOkus'),
      image: "./conorOkus.png",
      skills: "Spiral",
      socialMedia: {
        twitter: "https://twitter.com/ConorOkus",
        link:"https://www.bitcoindevelopers.xyz/",
        linkedin: "",
        nostr: "",
        instagram: "",
        youtube: "",
        github: "",
       
      },
    },
    {
      id: 59,
      name: "Francisco Litvay",
      description: t('speakers.franciscoLitvay'),
      image: "./Francisco-Headshot.jpg",
      skills: "Settee",
      socialMedia: {
        twitter: "https://x.com/franlitvay",
        link:"",
        linkedin: "https://www.linkedin.com/in/franlitvay/",
        nostr: "",
        instagram: "https://www.instagram.com/franlitvay",
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
      id: 61,
      name: "Max Kei",
      description: t('speakers.maxKei'),
      image: "./Max-kei.jpg",
      skills: "Debifi",
      socialMedia: {
        twitter: "https://x.com/keidunm",
        link:"",
        linkedin: "",
        nostr: "https://nostr.com/npub1797h37mc98f6363m5nysxd0t2swuz7nxq4z83saw77em3czld6xqvuar68",
        instagram: "",
        youtube: "",
        github: "",
       
      },
    },
    {
      id: 62,
      name: "Anna",
      description: t('speakers.anaaHold'),
      image: "./Anna.jpeg",
      skills: "Hodl Hodl",
      socialMedia: {
        twitter: "https://x.com/annahhodl",
        link:"",
        linkedin: "",
        nostr: "https://nostr.com/npub1zu5tdnq7w63fgmsfz85te7e6zeg7y2lt8q8r9jp5zcg68jfy73jqraqtgz",
        instagram: "",
        youtube: "",
        github: "",
       
      },
    },
    {
      id: 63,
      name: "Femi Longe",
      description: t('speakers.femiLonge'),
      image: "./femiLonge.jpeg",
      skills: "HRF",
      socialMedia: {
        twitter: "https://twitter.com/femilonge",
        link:"",
        linkedin: "https://www.linkedin.com/in/femi-longe/",
        nostr: "https://nostr.com/npub18yr27qkhaz05785zkjsxlnyu3lg0p22tjsje7ep229qyftc4e86qk88czq",
        instagram: "",
        youtube: "",
        github: "",
       
      },
    },
    {
      id: 64,
      name: "Felippe Hermes",
      description: t('speakers.felippeHermes'),
      image: "./felippeHermes.jpeg",
      skills: "BlockTrends",
      socialMedia: {
        twitter: "https://x.com/Felippe_Hermes",
        link:"",
        linkedin: "",
        nostr: "",
        instagram: "",
        youtube: "",
        github: "",
       
      },
    },
    {
      id: 65,
      name: "Plebhash",
      description: t('speakers.Plebhash'),
      image: "./miner_plebhash.png",
      skills: "StratumV2",
      socialMedia: {
        twitter: "https://x.com/plebhash",
        link:"",
        linkedin: "",
        nostr: "https://nostr.com/npub1rqx9zlmy7k2mre2t6t880rxv9fttzyl95jc5ym2tpfpepqcppkcs3ss548",
        instagram: "",
        youtube: "",
        github: "https://github.com/plebhash",
       
      },
    },
    {
      id: 66,
      name: "Eduardo Meyer",
      description: t('speakers.eduardoMeyer'),
      image: "./eduardoMayer.jpeg",
      skills: "FMI Mining",
      socialMedia: {
        twitter: "https://x.com/meyercafe",
        link:"",
        linkedin: "https://www.linkedin.com/in/eduardomeyerr/",
        nostr: "",
        instagram: "",
        youtube: "",
        github: "",
       
      },
    },
    {
      id: 67,
      name: "Rafaela Romano",
      description: t('speakers.rafaelaRomano'),
      image: "./rafaelaRomano.jpeg",
      skills: "Disruptivas",
      socialMedia: {
        twitter: "https://x.com/hi_disruptivas",
        link:"",
        linkedin: "",
        nostr: "",
        instagram: "",
        youtube: "",
        github: "",
       
      },
    },
    {
      id: 68,
      name: "Dulce Villareal",
      description: t('speakers.dulce'),
      image: "./dulce.jpg",
      skills: "Librería de Satoshi",
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
      id: 69,
      name: "Felipe Américo",
      description: t('speakers.felipeAmerico'),
      image: "./felipeAmerico.jpeg",
      skills: "Beno Brendão Advogados",
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
      id: 70,
      name: "Diogo Mury",
      description: t('speakers.diegoMury'),
      image: "./diegoMury.jpg",
      skills: "Go BTC",
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
      id: 71,
      name: "Isabella Rugna",
      description: t('speakers.isabellaRugna'),
      image: "./isabellaRugna.jpeg",
      skills: "Azteco",
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
      id: 72,
      name: "Saulo Quinteiro",
      description: t('speakers.sauloQuinteiro'),
      image: "./sauloQuinteiro.jpg",
      skills: "Sats Capital",
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
      id: 73,
      name: "Matt Carvalho",
      description: t('speakers.mateusCarvalho'),
      image: "./mateusCarvalho.jpg",
      skills: "Swan",
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
      id: 74,
      name: "Mateus Nunes",
      description: t('speakers.mateusNunes'),
      image: "./mateusNunes.png",
      skills: "Livecoins",
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
      id: 76,
      name: "Jhanisse Vaca Daza",
      description: t('speakers.jhanisseVaca'),
      image: "./jhanisseVaca.jpeg",
      skills: "HRF",
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
      id: 77,
      name: "Gustavo Lopes",
      description: t('speakers.gustavoLopes'),
      image: "./gustavoLopes.jpeg",
      skills: "Truther",
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
      id: 78,
      name: "Felipe Ojeda",
      description: t('speakers.felipeojeda'),
      image: "./felipeojeda.jpg",
      skills: "Moshe Internacionalização",
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
      id: 79,
      name: "Carlos de Biasi",
      description: t('speakers.carlosBiasi'),
      image: "./carlosBiasi.jpeg",
      skills: "VPBG Advogados",
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
      id: 80,
      name: "@skot9000",
      description: t('speakers.skot'),
      image: "./skot.jpeg",
      skills: "Bitaxe",
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
      id: 81,
      name: "Ian Major",
      description: t('speakers.ianMajor'),
      image: "./ianMajor.jpeg",
      skills: "Joltz",
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
      id: 82,
      name: "Edil Medeiros",
      description: t('speakers.edilMedeiros'),
      image: "./edilMedeiros.jpeg",
      skills: "UnB",
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
      id: 83,
      name: "Pablof7z",
      description: t('speakers.Pablof7z'),
      image: "./Pablof7z.jpg",
      skills: "Sovereign Engineering",
      socialMedia: {
        twitter: "",
        link:"",
        linkedin: "",
        nostr: "https://nostr.com/npub1l2vyh47mk2p0qlsku7hg0vn29faehy9hy34ygaclpn66ukqp3afqutajft",
        instagram: "",
        youtube: "",
        github: "",
       
      },
    },
    {
      id: 84,
      name: "Pedro",
      description: t('speakers.PedroPirate'),
      image: "./PirateHash.jpg",
      skills: "PirateHash",
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
      id: 85,
      name: "Guilherme Kenworthy",
      description: t('speakers.GuilhermeKen'),
      image: "./BipaGuilherme.jpeg",
      skills: "Bipa",
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
      id: 86,
      name: "Kevin Hurley",
      description: t('speakers.KevinH'),
      image: "./Kevin-Hurley.jpg",
      skills: "Lightspark",
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
      id: 87,
      name: "Victor Stabile",
      description: t('speakers.VictorStabile'),
      image: "./Victor-Stabile.jpg",
      skills: "Refugio",
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
      id: 88,
      name: "João Grilo",
      description: t('speakers.joaoGrilo'),
      image: "./Trickster.jpg",
      skills: "Trickster",
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
      id: 89,
      name: "João Abitante",
      description: t('speakers.joaoAbitante'),
      image: "./joaoAbitante.jpg",
      skills: "Autista Empreende/Eulen",
      socialMedia: {
        twitter: "",
        link:"https://ahoradaelisaofiscal.com.br/",
        linkedin: "",
        nostr: "",
        instagram: "",
        youtube: "",
        github: "",
       
      },
    },
    {
      id: 90,
      name: "Luis Van Der Berg",
      description: t('speakers.luisVanDer'),
      image: "./luisVanDer.jpeg",
      skills: "Hash Invest",
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
      id: 91,
      name: "Eduardo Jatahy",
      description: t('speakers.eduardoJatahy'),
      image: "./eduardoJatahy.jpg",
      skills: "Eulen",
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
      id: 92,
      name: "Francis Mars",
      description: t('speakers.francisMars'),
      image: "./francisMars.jpg",
      skills: "Chain Duel/Pubpay.me",
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
      id: 93,
      name: "Luiz Parreira",
      description: t('speakers.luizParreira'),
      image: "./luizParreira.jpeg",
      skills: "Bipa",
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
      id: 94,
      name: "Miles Suter",
      description: t('speakers.milesSuter'),
      image: "./milesSuter.jpeg",
      skills: "Cash App",
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
      id: 95,
      name: "Giovanni Rosa",
      description: t('speakers.giovanniRosa'),
      image: "./giovanniRosa.jpeg",
      skills: "Convex Research",
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
      id: 96,
      name: "Álvaro Salas-Castro",
      description: t('speakers.alvaroSalas'),
      image: "./alvaroSalas.jpeg",
      skills: "Reynolds Foundation",
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
      id: 97,
      name: "Arsh Molu",
      description: t('speakers.arshMolu'),
      image: "./arshMolu.jpg",
      skills: "HRF",
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
