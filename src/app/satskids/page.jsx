"use client"
import React from "react";
import { useTranslation } from 'react-i18next';
import BtnIngresso from "@/components/(landingpage)/ui/button/BtnIngresso";
import cookie from "js-cookie";
import ImageGalleryKids from "@/components/(landingpage)/images/ImageKids";
import TypeformSatsKids from "@/components/(landingpage)/containers/typeform/tformSatskids";

const SatsKids = ({ children }) => {
  const { t } = useTranslation();
  return (
    <div id="pSatskids">
      <div className="bgContainerImgGallery">
        <div className="bgContainerPrincipal ">
          <div className=" bgContainerMargin">
            <div className="boxprincipal">
              {/* caixa co container com fonte do titulo */}
              <div className="sc-bg-container ">
                <span>entrando na toca do coelho do bitcoin</span>
                <h1 className="margem-top-30">
                 DOIS DIAS DE AVENTURA E APRENDIZADO EM BITCOIN!
                </h1>
                <div className="container-btn-satsparty margem-top-20">
                  <BtnIngresso
                    url="#boxCadatreEventoKids"
                   
                  >
                    PARTICIPAR DA SATSKIDS
                  </BtnIngresso>
                </div>

                {/* gap de 16 com container de botão */}
              </div>

              <div className="btningresso-img container-com-gradiente">
                {/* imagem do container principal da pagina de ingresso esportado como componente */}
                <ImageGalleryKids />
              </div>
            </div>
          </div>
        </div>
       
      
      <div className="bgSatskids" >
          {/* imagens */}
          <div className=" boxCadatreEventokids">
          <div className="boxTitlekids ">
              <h4 className="press-start-2p-regular">O QUE ESPERAR</h4>
           
                <div className=" sc-fz-18 boxKids sora-regular">
                <ul>
                  <li><img src="/icon-satskids.png" alt="check" />Palestras para crianças</li>
                  <li><img src="/icon-satskids.png" alt="check" />Jogos e brincadeiras</li>
                  <li><img src="/icon-satskids.png" alt="check" />Cuidadores e recreadores</li>
                  <li><img src="/icon-satskids.png" alt="check" />Oficinas lúdicas</li>
                </ul>
               <ul>
               <li><img src="/icon-satskids.png" alt="check" />Brindes e presentes</li>
                  <li><img src="/icon-satskids.png" alt="check" />Atividades pra todas as idades (0 a 16 anos)</li>
                  <li><img src="/icon-satskids.png" alt="check" />Berçário (+ de 6 meses) e fraldário</li>
                  <li><img src="/icon-satskids.png" alt="check" />E muita diversão!</li>
               </ul>
                </div>
                
          
        
            </div>
         
          </div>
          <div className="bgBoxParceirosKids">
            <div className="boxTitlekidsParceiros ">
              <h4 className="press-start-2p-regular">PARCEIROS</h4>
            <ul className="boxparceirossatskids">
              <li><img src="/shamary.png" alt="" /></li>
              <li><img src="/lightning-piggy.png" alt="" /></li>
              <li><img src="/free-market-kids.png" alt="" /></li>
              <li><img src="/tuttle-twins.png" alt="" /></li>
            </ul>
           
            </div>
          <div className="boxCronogramaImg">
            <div className="boxTitle">
            <h4 className="press-start-2p-regular">CRONOGRAMA</h4>
            </div>
        
            <img src="/cronograma.png" alt="" />
          </div>
          </div>
          <div id="boxCadatreEvento" className="boxCadatreEvento">
            <div className="iconFormSatskids">
              <img src="/icon-satskids-form.png" alt="" />
            </div>
            <div className="boxTitle">
              <h4 className="press-start-2p-regular">FAÇA O CADASTRO AQUI</h4>
              <p className="sc-fz-18 sora-light">
              Faça seu cadastro e coloque seu pequeno na SatsConf 2024
               
              </p>
           
            </div>
            <div id="boxCadatreEventoKids">
            <TypeformSatsKids />
            </div>
      
          </div>
        </div>
        </div>
    </div>
  );
};

export default SatsKids;
