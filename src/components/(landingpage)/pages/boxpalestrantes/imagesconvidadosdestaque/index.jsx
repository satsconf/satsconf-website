"use client";
//não usar  
import { useState } from "react";
import ModalPalestrantes from "@/components/(landingpage)/ui/modal/modalDestaque/ModalPalestrantes";

const ImagesConvidadosDestaque = ({
  id,
  name,
  skills,
  description,
  image,
  twitter,
  linkedin,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="bgContainerConvidadosDestaque">
        <div className="blocoConvidados">
          <div className="ContainerImagemConvidadosDestaque">
            {/* imagem um */}

            <div
              className="containerConvidadosDestaque "
              onClick={() => {
                setShowModal(true);
              }}
            >
              <div className="number">{id}</div>

              <img src={image} alt="" className="imageConvidados" />
              <div className="containerImagesBoxDestaque">
                <h3>{name}</h3>
                <span>{skills}</span>
              </div>
            </div>

            {/* imagem dois */}
            <div
              div
              className="containerConvidadosDestaque"
              onClick={() => {
                setShowModal(true);
              }}
            >
              <div className="number">{id}</div>
              <img
                src="/palestrantes-sats-conf-destaque-dia.jpg"
                alt=""
                className="imageConvidados"
              />
              <div className="containerImagesBoxDestaque">
                <h3>{name}</h3>
                <span>...</span>
              </div>
            </div>
            {/* imagem tres */}
            <div className="containerConvidadosDestaque">
              <img
                src="/satsconf-convidado-destaque-ano.jpg"
                alt=""
                className="imageConvidados"
              />
              <div className="containerImagesBoxDestaque">
                <h3>Em breve!</h3>
                <span>...</span>
              </div>
            </div>
          </div>

          <div className="bgContainerImagemConvidadoGlobal ">
            {/* container imagens todos os convidados */}
            <div
              className="containerConvidadosDestaque   bgContainerPalestrantes"
              id="convidado"
            >
              {/* imagem um */}

              <div className="containerImagesConvidadosGerais " onClick={() => {
                setShowModal(true);
              }}>
                <img
                  src="/palestrantes-satsconf.png"
                  alt=""
                  className="imageConvidados"
                />
                <div className="containerImagesBoxDestaque">
                  <h3>Em breve!</h3>
                  <span>...</span>
                </div>
              </div>
              {/* imagem dois */}
              <div className="containerImagesConvidadosGerais">
                <img
                  src="/palestrantes-satsconf.png"
                  alt=""
                  className="imageConvidados"
                />
                <div className="containerImagesBoxDestaque" id="convidado">
                  <h3>Em breve!</h3>
                  <span>...</span>
                </div>
              </div>
              {/* imagem tres */}
              <div className="containerImagesConvidadosGerais">
                <img
                  src="/palestrantes-satsconf.png"
                  alt=""
                  className="imageConvidados"
                />
                <div className="containerImagesBoxDestaque">
                  <h3>Em breve!</h3>
                  <span>...</span>
                </div>
              </div>
              {/* imagem quadro */}
              <div className="containerImagesConvidadosGerais">
                <img
                  src="/palestrantes-satsconf.png"
                  alt=""
                  className="imageConvidados"
                />
                <div className="containerImagesBoxDestaque">
                  <h3>Em breve!</h3>
                  <span>...</span>
                </div>
              </div>
              {/* imagem cinco */}
              <div className="containerImagesConvidadosGerais">
                <img
                  src="/palestrantes-satsconf.png"
                  alt=""
                  className="imageConvidados"
                />
                <div className="containerImagesBoxDestaque">
                  <h3>Em breve!</h3>
                  <span>...</span>
                </div>
              </div>
              {/* imagem cinco */}
              <div className="containerImagesConvidadosGerais">
                <img
                  src="/palestrantes-satsconf.png"
                  alt=""
                  className="imageConvidados"
                />
                <div className="containerImagesBoxDestaque">
                  <h3>Em breve!</h3>
                  <span>...</span>
                </div>
              </div>
              {/* imagem cinco */}
              <div className="containerImagesConvidadosGerais">
                <img
                  src="/palestrantes-satsconf.png"
                  alt=""
                  className="imageConvidados"
                />
                <div className="containerImagesBoxDestaque">
                  <h3>Em breve!</h3>
                  <span>...</span>
                </div>
              </div>
              {/* imagem cinco */}
              <div className="containerImagesConvidadosGerais">
                <img
                  src="/palestrantes-satsconf.png"
                  alt=""
                  className="imageConvidados"
                />
                <div className="containerImagesBoxDestaque">
                  <h3>Em breve!</h3>
                  <span>...</span>
                </div>
              </div>
              {/* imagem cinco */}
              <div className="containerImagesConvidadosGerais">
                <img
                  src="/palestrantes-satsconf.png"
                  alt=""
                  className="imageConvidados"
                />
                <div className="containerImagesBoxDestaque">
                  <h3>Em breve!</h3>
                  <span>...</span>
                </div>
              </div>
              {/* imagem cinco */}
              <div className="containerImagesConvidadosGerais">
                <img
                  src="/palestrantes-satsconf.png"
                  alt=""
                  className="imageConvidados"
                />
                <div className="containerImagesBoxDestaque">
                  <h3>Em breve!</h3>
                  <span>...</span>
                </div>
              </div>
              {/* imagem cinco */}
              <div className="containerImagesConvidadosGerais">
                <img
                  src="/palestrantes-satsconf.png"
                  alt=""
                  className="imageConvidados"
                />
                <div className="containerImagesBoxDestaque">
                  <h3>Em breve!</h3>
                  <span>...</span>
                </div>
              </div>
              {/* imagem cinco */}
              <div className="containerImagesConvidadosGerais">
                <img
                  src="/palestrantes-satsconf.png"
                  alt=""
                  className="imageConvidados"
                />
                <div className="containerImagesBoxDestaque">
                  <h3>Em breve!</h3>
                  <span>...</span>
                </div>
              </div>
              {/* imagem cinco */}
              <div className="containerImagesConvidadosGerais">
                <img
                  src="/palestrantes-satsconf.png"
                  alt=""
                  className="imageConvidados"
                />
                <div className="containerImagesBoxDestaque">
                  <h3>Em breve!</h3>
                  <span>...</span>
                </div>
              </div>
              {/* imagem cinco */}
              <div className="containerImagesConvidadosGerais">
                <img
                  src="/palestrantes-satsconf.png"
                  alt=""
                  className="imageConvidados"
                />
                <div className="containerImagesBoxDestaque">
                  <h3>Em breve!</h3>
                  <span>...</span>
                </div>
              </div>
              {/* imagem cinco */}
              <div className="containerImagesConvidadosGerais">
                <img
                  src="/palestrantes-satsconf.png"
                  alt=""
                  className="imageConvidados"
                />
                <div className="containerImagesBoxDestaque">
                  <h3>Em breve!</h3>
                  <span>...</span>
                </div>
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
            linkedin={linkedin}
            handleClose={handleClose}
          />
        )}
      </div>
    </>
  );
};

export default ImagesConvidadosDestaque;
