"use client";

import { useState } from "react";
import Card from "../Card";
//conteudo do modal
const ConvidadosSats = () => {
  const [profiles, updateProfiles] = useState([
    {
      id: 1,
      name: "Alex Gladstein",
      description: "Alex Gladstein é o chief strategy officer at the Human Rights Foundation. No seu trabalho, Gladstein conectou centenas de dissidentes e grupos da sociedade civil com líderes empresariais, tecnólogos, jornalistas, filantropos, decisores políticos e artistas para promover sociedades livres e abertas. Ele frequentemente fala e escreve sobre por que o Bitcoin é importante como ferramenta para a liberdade, e foi coautor do “The Little Bitcoin Book” em 2019. Seu livro 'Check Your Financial Privilege' foi publicado em 2022, e seu último livro, 'Hidden Repression: How the FMI and World Bank sell Exploitation as Development' foi publicado em abril 2023.",
      image: "./alex-gladstein.jpeg",
      skills: "Human Rights Foundation",
      socialMedia: {
        twitter: "https://twitter.com/participant1",
        linkedin: "https://www.linkedin.com/in/participant1",
   

      },
    },
    {
      id: 2,
      name: "Nome ",
      description: "Descrição do Participante 1...",
      image: "./palestrantes-sats-conf-destaque-dia.jpg",
      skills: "CEO",
      socialMedia: {
        twitter: "https://twitter.com/participant1",
        linkedin: "https://www.linkedin.com/in/participant1",
        
      },
    },
    {
      id: 3,
      name: "Nome ",
      description: "Descrição do Participante 1...",
      image: "./satsconf-convidado-destaque-ano.jpg",
      skills: "CEO",
      socialMedia: {
        twitter: "https://twitter.com/participant1",
        linkedin: "https://www.linkedin.com/in/participant1",
        
      },
    },
    {
      id: 4,
      name: "Nome ",
      description: "Descrição do Participante 1...",
      image: "./satsconf-convidado-destaque-ano.jpg",
      skills: "CEO",
      socialMedia: {
        twitter: "https://twitter.com/participant1",
        linkedin: "https://www.linkedin.com/in/participant1",
       
      },
    },
    {
      id: 5,
      name: "Nome ",
      description: "Descrição do Participante 1...",
      image: "./satsconf-convidado-destaque-ano.jpg",
      skills: "CEO",
      socialMedia: {
        twitter: "https://twitter.com/participant1",
        linkedin: "https://www.linkedin.com/in/participant1",
       
      },
    },
    {
      id: 6,
      name: "Nome ",
      description: "Descrição do Participante 1...",
      image: "./satsconf-convidado-destaque-ano.jpg",
      skills: "CEO",
      socialMedia: {
        twitter: "https://twitter.com/participant1",
        linkedin: "https://www.linkedin.com/in/participant1",
       
      },
    },
    {
      id: 7,
      name: "Nome ",
      description: "Descrição do Participante 1...",
      image: "./satsconf-convidado-destaque-ano.jpg",
      skills: "CEO",
      socialMedia: {
        twitter: "https://twitter.com/participant1",
        linkedin: "https://www.linkedin.com/in/participant1",
       
      },
    },
    {
      id: 8,
      name: "Nome ",
      description: "Descrição do Participante 1...",
      image: "./satsconf-convidado-destaque-ano.jpg",
      skills: "CEO",
      socialMedia: {
        twitter: "https://twitter.com/participant1",
        linkedin: "https://www.linkedin.com/in/participant1",
       
      },
    },
    {
      id: 9,
      name: "Nome ",
      description: "Descrição do Participante 1...",
      image: "./satsconf-convidado-destaque-ano.jpg",
      skills: "CEO",
      socialMedia: {
        twitter: "https://twitter.com/participant1",
        linkedin: "https://www.linkedin.com/in/participant1",
       
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
            twitter={profile.twitter}
            linkedin={profile.linkedin}
            className={index < 3 ? "palestrante-destaque " : "palestrante-global"}
          />
        );
      })}
    </div>
  );
};

export default ConvidadosSats;
