"use client";
import React from "react";
import { useTranslation } from 'react-i18next';
import ContainerPatrocinio from "@/components/(landingpage)/pages/patrocinio/ContainerPatrocinio";
import ImagePatrocinio from "@/components/(landingpage)/pages/patrocinio/ImageIngresso";
import TypeformPatrocinador from "@/components/(landingpage)/containers/typeform/tformPatrocinador";


const Patrocinio = ({ children }) => {
  const { t } = useTranslation();
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
                <h1> {t("sponsor.title")}</h1>
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
            <h2>{t("sponsor.subTitle")}</h2>
            <p className="sc-fz-18 sora-light ">{t("sponsor.subTitleTwo")}
            
            </p>
          </div>
          <div>
           <ContainerPatrocinio/>
          </div>
          <div className="boxTitle containerFormIngresso">
            <h2>{t("sponsor.titleForm")}
            </h2>
            <p className="sc-fz-18 sora-light ">
              {t("sponsor.subTitleForm")}
           </p>
          </div>
          <TypeformPatrocinador />
        </div>
      </div>
      
     
    </section>
  );
};

export default Patrocinio;
