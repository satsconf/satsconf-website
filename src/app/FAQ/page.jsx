"use client"
import React from "react";
import { useTranslation } from 'react-i18next';
import FAQpreparese from "@/components/(landingpage)/containers/faq/faqpreparese";
import FAQqueromeenvolver from "@/components/(landingpage)/containers/faq/faqqueromeenvolver";
import ImageFaq from "@/components/(landingpage)/images/ImageFaq";
import FAQgeral from "@/components/(landingpage)/containers/faq/geral";


const Faq = ({ children }) => {
  const { t } = useTranslation();
  return (
    <div id="Faq">
            {/* Aqui é onde você renderiza children */} {children}
      <div className="bgContainerImgFaq ">
      <div className="bgContainerPrincipal ">
        <div className=" bgContainerMargin">
          <div className="boxprincipal">
            {/* caixa co container com fonte do titulo */}
            <div className="sc-bg-container krona-one-regular">
              <h1>{t('faqPage.titlePage')}</h1>
              {/* gap de 16 com container de botão */}
            </div>

            <div className="btningresso-img container-com-gradiente">
              {/* imagem do container principal da pagina de ingresso esportado como componente */}
            <ImageFaq />
            </div>

            </div>
          </div>
        </div>
      </div>
      <div className=" krona-one-regular bgContaineImgIgresso">
        <FAQgeral/>
      </div>
      <div className="krona-one-regular bgContaineImgIgresso">
      <FAQqueromeenvolver />

      </div>
      <FAQpreparese />
      <div className="boxTitle containerEntrarContato">
        <h2 className="krona-one-regular "> {t('faqPage.questionFaq')}</h2>
        <p className="">
        {t('faqPage.ResponseFaq')}
          <br /> 
          {t('faqPage.ResponseFaqTwo')}
        </p>
      </div>
      </div>
  );
};

export default Faq;
