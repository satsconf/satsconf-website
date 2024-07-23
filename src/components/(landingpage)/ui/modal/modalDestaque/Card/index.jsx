//card

"use client";

import { useState } from "react";
import ModalPalestrantes from "../ModalPalestrantes";


const Card = ({ id, name, skills, description, image, twitter, linkedin, nostr, instagram, youtube, github, link, className }) => {
  
  const [showModal, setShowModal] = useState(false);


  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className={`card ${className}`}>
          <div className="bgContainerConvidadosDestaque">
      <div className="boxBlocoConvidados">
        <div className="ContainerImagemConvidadosDestaque">
          {/* imagem um */}

          <div
            className="containerConvidadosDestaque "
            onClick={() => {
              console.log("Clicked!");
              setShowModal(true);
            }}
          >
            <div className="number" id={id}></div>

            <img src={image} alt="" className="imageConvidados" />
            <div className="containerImagesBoxDestaque">
              <h3>{name}</h3>
              <span>{skills}</span>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <ModalPalestrantes
          name={name}
          description={description}
          image={image}
          twitter={twitter}
          link={link}
          linkedin={linkedin}
          nostr={nostr}
          instagram={instagram}
          youtube={youtube}
          github={github}
          handleClose={handleClose}
        />
      )}
    </div>
    </div>

  );
};

export default Card;
