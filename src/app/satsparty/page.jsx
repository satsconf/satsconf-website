"use client";
import React from "react";
import { useTranslation } from 'react-i18next';
import ImagePrincipalSatsParty from "@/components/(landingpage)/images/Satsparty/imagePrincipalSatsParty";
import SatsPartyImgEvento from "@/components/(landingpage)/images/Satsparty/satspartyEvento";
import BtnIngresso from "@/components/(landingpage)/ui/button/BtnIngresso";
import cookie from "js-cookie";

const pSatsParty = ({ children }) => {
  const { t } = useTranslation();
  return (
    <div id="pSatsParty">
      <div className="bgContainerPrincipalImg">
      <div className="bgContainerPrincipal ">
        <div className=" bgContainerMargin">
          <div className="boxprincipal">
            {/* caixa co container com fonte do titulo */}
            <div className="sc-bg-container krona-one-regular ">
              <span className="SatsConfParty-Span">{t('satsparty.titleParty')}</span>
              <h1 className="margem-top-30">
                <img className="imgSatsparty" src="./satsparty-evento-imagem-logo.png" alt="" /></h1>
              <div className="container-btn-satsparty margem-top-20">
              <BtnIngresso url="https://www.satsconf.com.br/ingressos" onClick={() =>{
            cookie.set("btn_lp_global-buy", "btn_55117878", {
              httpOnly: true,
              secure: process.env.NODE_ENV === 'production',
              sameSite: 'strict'
            })
          }}>
              {t('buttons.purchase')}</BtnIngresso>
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
