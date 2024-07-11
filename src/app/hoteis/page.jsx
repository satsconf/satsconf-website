import ImageHotel from "@/components/(landingpage)/images/ImageHotel";
import AmbienteHotel from "@/components/(landingpage)/images/ImageHotel/AmbienteHotel";
import BtnNovidades from "@/components/(landingpage)/ui/button/BtnNovidades";

const Hoteis = ({ children }) => {
  return (
    <section id="pHoteis">
      {/* Aqui é onde você renderiza children */}
      {children}
      <div className="bgContainerImgFaq">
        <div className="bgContainerPrincipal">
          <div className=" bgContainerMargin ">
            <div className="boxprincipal">
              {/* caixa co container com fonte do titulo */}
              <div className="sc-bg-container krona-one-regular divFontLocalHotel">
                <h1>Nosso hotel parceiro</h1>
                <h2>Slaviero Downtown São Paulo</h2>
                <h3>Rua Araújo 141</h3>
                {/* gap de 16 com container de botão */}
              </div>

              <div className="btningresso-img container-com-gradiente">
                {/* imagem do container principal esportado como componente */}
                <ImageHotel />
              </div>
            </div>
          </div>
        </div>
        <div className="containerHoteis">
          <div className="boxTitle">
            {" "}
            <h2 className="containerTitleForm">
              Use o cupom SATSCONF para um desconto de 15% nas reservas pelo
              site!
            </h2>
          </div>
          <div className="containerImagesHotel">
            <AmbienteHotel />
          </div>
          <div className="container-btn-palestrantes padding-bottom-60 btnContainerConvidadosPalestrantes">
            <BtnNovidades url="https://www.slavierohoteis.com.br/hoteis/slaviero-downtown-sao-paulo">
              Acesse o site do hotel
            </BtnNovidades>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hoteis;
