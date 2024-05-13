"use client";

import { useState } from "react";
import Card from "../Card";
//conteudo do modal
const ConvidadosSats = () => {
  const [profiles, updateProfiles] = useState([
    {
      id: 1,
      name: "Pedro Victor",
      description: "Descrição do Participante 1...",
      image: "./palestrante-destaque-satsconf.jpg",
      skills: "CEO",
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
   
  ]);

  return (
    <div className="profile-card">
      {profiles.map((profile) => {
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
          />
        );
      })}
    </div>
  );
};

export default ConvidadosSats;
