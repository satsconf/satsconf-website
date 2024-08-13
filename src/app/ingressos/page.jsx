"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import BtnIngresso from "@/components/(landingpage)/ui/button/BtnIngresso";
import BtnNovidades from "@/components/(landingpage)/ui/button/BtnNovidades";
import BoxTabelaIngresso from "@/components/(landingpage)/pages/ingresso/boxtabelaingresso";
import ImageIgresso from "@/components/(landingpage)/images/ImageIngresso";
import IngressoBtn from "@/components/(landingpage)/ui/modal/modalBtn";
import FAQ from "@/components/(landingpage)/pages/ingresso/faqingresso";

import cookie from "js-cookie";

const Ingressos = ({ children }) => {
  const { t } = useTranslation();
  return (
    <section id="Ingressos">
      {/* Aqui é onde você renderiza children */}
      {children}


      <div className="bgContainerImg displayNone ">
        <div className="bgContainerPrincipal bgLinear">
          <div className=" bgContainerMargin">
            <div className="boxprincipal">
              {/* caixa co container com fonte do titulo */}
              <div className="sc-bg-container krona-one-regular ">
                <span>{t("program.titleData")}</span>
                <h1>{t("tickets.title")}</h1>
                {/* gap de 8 com container de botão */}
                <div className="sc-gap-8 container-btn">
                  <BtnIngresso
                    url="#comprarqui"
                    onClick={() => {
                      cookie.set("btn_lp_global-buy", "btn_55117878", {
                        httpOnly: true,
                        secure: process.env.NODE_ENV === "production",
                        sameSite: "strict",
                      });
                    }}
                  >
                    {t("buttons.purchase")}
                  </BtnIngresso>
                  {/* botão do container principal */}
                  <BtnNovidades url="https://chat.whatsapp.com/JLDl4QZwwXb1htqScSJXgq">
                    {t("buttons.grupo")}
                  </BtnNovidades>
                </div>
              </div>

              <div className="btningresso-img container-com-gradiente">
                {/* imagem do container principal da pagina de ingresso esportado como componente */}
                <ImageIgresso />
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <div className="bgContainerComprarIngresso ">
        <div className=" krona-one-regular">
          <div className="boxTitle containerFixoIngresso">
            <h2>{t("tickets.titleTickets")}</h2>
            <p className="sc-fz-18 sora-light ">{t("tickets.subTitle")}</p>
          </div>
          <div>
            <IngressoBtn />
          </div>
        </div>
      </div>
      
      <div>
        <BoxTabelaIngresso />
      </div>
      <div>
        <FAQ />
      </div>
    </section>
  );
};

export default Ingressos;
