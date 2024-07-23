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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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
      id: 11,
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
      id: 12,
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
      id: 13,
      name: "Madu",
      description: t('speakers.madu'),
      image: "./madulobato.jpg",
      skills: "Blink",
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
