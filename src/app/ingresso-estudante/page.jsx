"use client";
import React from "react";
import { Trans, useTranslation } from "react-i18next";
import Link from "next/link";
import ImageEstudante from "@/components/(landingpage)/pages/estudante";

const IngressoEstudante = ({ children }) => {
  const { t } = useTranslation();
  return (
    <section id="pIEstudante">
      {/* Aqui é onde você renderiza children */}
      {children}

      <div className="bgContainerImg ">
        <div className="bgContainerPrincipal">
          <div className=" bgContainerMargin">
            <div className="boxprincipal">
              {/* caixa co container com fonte do titulo */}
              <div className="sc-bg-container krona-one-regular ">
                <h1> {t("student.title")}</h1>
                {/* gap de 8 com container de botão */}
              </div>

              <div className="btningresso-img container-com-gradiente " >
                {/* imagem do container principal da pagina de ingresso esportado como componente */}
                <ImageEstudante />
              </div>
            </div>
          </div>
        </div>
      
      <div className="degraderBlack">
      <div className="bgContainerComprarIngresso">
        <div className="containerEstudante">
          <div className="textEstudante">
            <p>{t("student.textOne")}</p>
            <br />
            <p>{t("student.textTwo")}</p>
            <img src="./logoBitcoinStudentsNetwork.svg" alt="" />
            <br />
            <p>
              <Trans i18nKey="student.textThree">
                <a href="https://www.genbitcoin.org/"></a>
              </Trans>
            </p>
            <br />
            <p>{t("student.textFour")}</p>
            <div className=" margem-top-30 containerComprarIngressoestudante">
              <ul>
                <li>
                  <img
                    src="estudanteIngressoNormal.png"
                    alt="Comprar ingresso Normal Pass"
                  />
                </li>
                <li>
                  <span>{t("student.ticket")}</span>
                </li>
                <li className="krona-one-regular">R$50</li>
                <li>
                  <div className="buttonIngressoComprar">
                    <Link href="https://ingresso.satsconf.com.br/cart/41822036721799:1?storefront=true">
                      {t("buttons.purchaseNow")}
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    </section>
  );
};

export default IngressoEstudante;
