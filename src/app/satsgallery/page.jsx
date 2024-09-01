"use client"
import React from "react";
import { useTranslation } from 'react-i18next';
import TypeformSatsGallery from "@/components/(landingpage)/containers/typeform/tformSatsGallery";
import ImageGallery from "@/components/(landingpage)/images/ImageGallery";
import BtnIngresso from "@/components/(landingpage)/ui/button/BtnIngresso";
import cookie from "js-cookie";

const Gallery = ({ children }) => {
  const { t } = useTranslation();
  return (
    <div id="pGallery">
      <div className="bgContainerImgGallery">
        <div className="bgContainerPrincipal ">
          <div className=" bgContainerMargin">
            <div className="boxprincipal">
              {/* caixa co container com fonte do titulo */}
              <div className="sc-bg-container krona-one-regular ">
                <span>{t('satsgallery.title')}</span>
                <h1 className="margem-top-30">
                  <img src="./sats-gallery.png" alt="" />
                </h1>
                <div className="container-btn-satsparty margem-top-20">
                  <BtnIngresso
                    url="#boxCadatreEvento"
                    onClick={() => {
                      cookie.set("btn_lp_global-buy", "btn_55117878", {
                        httpOnly: true,
                        secure: process.env.NODE_ENV === "production",
                        sameSite: "strict",
                      });
                    }}
                  >
                    {t('satsgallery.buttonGallery')}
                  </BtnIngresso>
                </div>

                {/* gap de 16 com container de botão */}
              </div>

              <div className="btningresso-img container-com-gradiente">
                {/* imagem do container principal da pagina de ingresso esportado como componente */}
                <ImageGallery />
              </div>
            </div>
          </div>
        </div>
       
      
      <div className="bgSatsGallery" >
          {/* imagens */}
          <div className="imagensGallery stretch">
            <img className="imgGalleryBox item-1" src="/LM7-144.png" alt="" />
            <img className="imgGalleryBox item-2" src="/LM7-319.png" alt="" />
            <img className="imgGalleryBox item-3" src="/LM7-146.png" alt="" />
          </div>

          <div id="boxCadatreEvento" className="boxCadatreEvento">
            <div className="boxTitle">
              <h4 className="krona-one-regular">{t('satsgallery.titleForm')}</h4>
              <p className="sc-fz-18 sora-light">
              {t('satsgallery.subTitle')}
               
              </p>
           
            </div>
            <TypeformSatsGallery />
          </div>
        </div>
        </div>
    </div>
  );
};

export default Gallery;
