"use client"
import ContainerPatrocinio from "@/components/(landingpage)/pages/patrocinio/ContainerPatrocinio";
import ImagePatrocinio from "@/components/(landingpage)/pages/patrocinio/ImageIngresso";
import TypeformPatrocinador from "@/components/(landingpage)/containers/typeform/tformPatrocinador";


const Patrocinio = ({ children }) => {
  return (
    <section id="Patrocinio">
      {/* Aqui é onde você renderiza children */}
      {children}

      <div className="bgContainerImg ">
        <div className="bgContainerPrincipal">
          <div className=" bgContainerMargin">
            <div className="boxprincipal">
              {/* caixa co container com fonte do titulo */}
              <div className="sc-bg-container krona-one-regular ">
                <h1>PATROCINA A SATSCONF</h1>
                {/* gap de 8 com container de botão */}
               
              </div>

              <div className="btningresso-img container-com-gradiente">
                {/* imagem do container principal da pagina de ingresso esportado como componente */}
                <ImagePatrocinio />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bgContainerComprarIngresso">
        <div className=" krona-one-regular">
          <div className="boxTitle">
            <h2>PATROCINADORES 2022-2023</h2>
            <p className="sc-fz-18 sora-light ">
            Veja quem patrocinou a Satsconf em edições anteriores
            </p>
          </div>
          <div>
           <ContainerPatrocinio/>
          </div>
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

export default Patrocinio;
