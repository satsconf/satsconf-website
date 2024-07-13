"use client"
import TypeformPatrocinador from "@/components/(landingpage)/containers/typeform/tformPatrocinador";
import ImageImpreensa from "@/components/(landingpage)/images/ImageImprensa";


const Imprensa = ({ children }) => {
  return (
    <section id="Imprensa">
      {/* Aqui é onde você renderiza children */}
      {children}

      <div className="bgContainerImg ">
        <div className="bgContainerPrincipal">
          <div className=" bgContainerMargin">
            <div className="boxprincipal">
              {/* caixa co container com fonte do titulo */}
              <div className="sc-bg-container krona-one-regular ">
                <h1>IMPRENSA</h1>
                {/* gap de 8 com container de botão */}
               
              </div>

              <div className="btningresso-img container-com-gradiente">
                {/* imagem do container principal da pagina de ingresso esportado como componente */}
                <ImageImpreensa />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bgContainerComprarIngresso">
        <div className=" krona-one-regular">
          
          <div className="boxTitle containerFormIngresso">
            <h2>Quer patrocinar a edição 2024?
            </h2>
            <p className="sc-fz-18 sora-light ">
            Preencha o formulário abaixo!</p>
          </div>
          <TypeformPatrocinador />
        </div>
      </div>
      
     
    </section>
  );
};

export default Imprensa;
