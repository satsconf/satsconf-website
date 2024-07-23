"use client"
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import ImageLocal from "@/components/(landingpage)/images/ImageContato";
import Mapa from "@/components/(landingpage)/pages/localevento/mapa";

const LocalEvento = ({ children }) => {
  const { t } = useTranslation();
  return (
    <section id="LocalEvento">
      {/* Aqui é onde você renderiza children */}
      {children}
      <div className="bgContainerImgFaq">
        <div className="bgContainerPrincipal">
          <div className=" bgContainerMargin ">
            <div className="boxprincipal">
              {/* caixa co container com fonte do titulo */}
              <div className="sc-bg-container krona-one-regular divFontLocalEvento lineTitle-50">
                <span>8 e 9 de Novembro</span>
                <h1>AUDIO CLUB SÃO PAULO</h1>
                <h3>Av Francisco Matarazzo, 694</h3>
                {/* gap de 16 com container de botão */}
              </div>

              <div className="btningresso-img container-com-gradiente">
                {/* imagem do container principal esportado como componente */}
                <ImageLocal />
              </div>
            </div>
          </div>
        </div>
        <div className="containerLocal">
        <div className="boxTitle">
            {" "}
            <h2 className=" containerTitleForm">
            {t("localEvent.titleLocal")}
            </h2>

          </div>
          
        <Mapa />
        </div>
      </div>
    </section>
  );
};

export default LocalEvento;
