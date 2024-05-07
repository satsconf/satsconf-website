import BtnIngresso from "@/components/(landingpage)/ui/button/BtnIngresso";
import BtnNovidades from "@/components/(landingpage)/ui/button/BtnNovidades";
import ImagesConvidadosDestaque from "../imagesconvidadosdestaque";

const BoxPrincipalPalestrantes = () => {
  return (
    <div className="bgContainerImageConvidadosPage">
      <div className="bgContainerConvidadosDestaque ">
        <div className="boxprincipalConvidadoDestaque font-white krona-one-regular ">
          <div className="sc-mgem-16 ">
            <span className="sc-fz-24 ">8 e 9 de Novembro | são Paulo</span>
            <h2 className="sc-fz-48 ">
              CONHEÇA OS PALESTRANTES DA EDIÇÃO 2024
            </h2>
          </div>
          <div className="sc-gap-8 container-btn">
            <BtnIngresso url="https://www.example.com">
              COMPRAR INGRESSO
            </BtnIngresso>
            {/* botão do container principal */}
            <BtnNovidades url="/">RECEBER NOVIDADES</BtnNovidades>
          </div>
        </div>

        <ImagesConvidadosDestaque />
      </div>
    </div>
  );
};

export default BoxPrincipalPalestrantes;
