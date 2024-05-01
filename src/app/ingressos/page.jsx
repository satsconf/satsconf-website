import BtnIngresso from "@/components/(landingpage)/ui/button/BtnIngresso";
import BtnNovidades from "@/components/(landingpage)/ui/button/BtnNovidades";
import ImageIgresso from "@/components/(landingpage)/images/ImageIngresso";

const Ingressos = ({ children }) => {
  return (
    
     
      <div id="Ingressos">
         {/* Aqui é onde você renderiza children */}
        {" "}
        {children}
        <div className="bgContainerPrincipal">
          <div className=" bgContainerMargin">
            <div className="boxprincipal">
              {/* caixa co container com fonte do titulo */}
              <div className="sc-bg-container krona-one-regular ">
                <span>8 e 9 DE NOVEMBRO | SÃO PAULO</span>
                <h1>INGRESSOS SATSCONF</h1>
                {/* gap de 16 com container de botão */}
                <div className="sc-gap-8 container-btn">
                  <BtnIngresso url="https://www.example.com">
                    COMPRAR INGRESSO
                  </BtnIngresso>
                  {/* botão do container principal */}
                  <BtnNovidades url="/">COMPRAR EM GRUPO</BtnNovidades>
                </div>
              </div>

              <div className="btningresso-img container-com-gradiente">
                {/* imagem do container principal da pagina de ingresso esportado como componente */}
                <ImageIgresso />
              </div>
            </div>
          </div>
        </div>
        <div className=" krona-one-regular">
          <div>
          <h2>INGRESSOS SATSCONF</h2>
            <p>Garanta seu ingresso para a terceira edição do maior evento 100% bitcoin do brasil</p>
          </div>

        
        </div>
      </div>
  
  );
};

export default Ingressos;
