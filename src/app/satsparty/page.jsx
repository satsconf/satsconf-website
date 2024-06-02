import ImagePrincipalSatsParty from "@/app/[lang]/(landingpage)/images/Satsparty/imagePrincipalSatsParty";
import SatsPartyImgEvento from "@/app/[lang]/(landingpage)/images/Satsparty/satspartyEvento";
import BtnIngresso from "@/app/[lang]/(landingpage)/ui/button/BtnIngresso";

const pSatsParty = ({ children }) => {
  return (
    <div id="pSatsParty">
      <div className="bgContainerPrincipalImg">
      <div className="bgContainerPrincipal ">
        <div className=" bgContainerMargin">
          <div className="boxprincipal">
            {/* caixa co container com fonte do titulo */}
            <div className="sc-bg-container krona-one-regular ">
              <span className="SatsConfParty-Span">Evento exclusivo para vips</span>
              <h1 className="margem-top-30">ENTRE NO NOVO MUNDO COM A GENTE!</h1>
              <div className="container-btn-satsparty margem-top-20">
              <BtnIngresso url="/">COMPRAR INGRESSO</BtnIngresso>
              </div>
        
              {/* gap de 16 com container de botão */}
            </div>

            <div className="btningresso-img container-com-gradiente">
              {/* imagem do container principal da pagina de ingresso esportado como componente */}
              <ImagePrincipalSatsParty />
            </div>
          </div>
        </div>
      </div>
    
        <div> <SatsPartyImgEvento /></div>
      </div>
     
      
    </div>
  );
};

export default pSatsParty;
