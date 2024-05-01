import BtnNovidades from "../../ui/button/BtnNovidades";

const ConvidadosPaginaPrincipal = () => {
  return (
    <div className="bgContainerImgPalestrantes">
      <div className="bgContainerConvidadosPaginaPrincipal">
        <div className="containerTitlePalestrantes">
          <h2>Palestrantes</h2>
        </div>
        <div className="ContainerImagemConvidadosDestaque">
          {/* imagem um */}
          <div className="containerConvidadosDestaque ">
            <img
              src="/palestrante-destaque-satsconf.jpg"
              alt=""
              className="imageConvidados"
            />
            <div className="containerImagesBoxDestaque">
              <h3>Em breve!</h3>
              <span>...</span>
            </div>
          </div>
          {/* imagem dois */}
          <div className="containerConvidadosDestaque">
            <img
              src="/palestrantes-sats-conf-destaque-dia.jpg"
              alt=""
              className="imageConvidados"
            />
            <div className="containerImagesBoxDestaque">
              <h3>Em breve!</h3>
              <span>...</span>
            </div>
          </div>
          {/* imagem tres */}
          <div className="containerConvidadosDestaque ">
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
        <div className="boxCenterPaginaPrincipalConvidados">
          <div className="bgContainerImagemConvidadoGlobal ">
            {/* container imagens todos os convidados */}
            <div>
            <div
              className="containerConvidadosDestaque   bgContainerPalestrantes"
              id="convidado"
            >
              {/* imagem um */}
              <div className="containerImagesConvidadosGerais ">
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

             

            </div>
            <div className=" container-btn-palestrantes">
                <div className="boxBtnHomePalestrantes">
                <BtnNovidades url="/palestrantes">VEJA TODOS PALESTRANTES</BtnNovidades>           
              {/* botão do container principal */}      
                </div>
              
            </div>
            </div>
           
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConvidadosPaginaPrincipal;
