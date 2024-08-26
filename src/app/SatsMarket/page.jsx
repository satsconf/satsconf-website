"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import ContainerPatrocinio from "@/components/(landingpage)/pages/patrocinio/ContainerPatrocinio";
import ImagePatrocinio from "@/components/(landingpage)/pages/patrocinio/ImageIngresso";
import TypeformSatsMarket from "@/components/(landingpage)/containers/typeform/tformMarket";

const SatsMarket = ({ children }) => {
  const { t } = useTranslation();
  return (
    <section id="PagSatsMarket">
      {/* Aqui é onde você renderiza children */}
      {children}

      <div className="bgContainerImg ">
        <div className="SMbgContainerPrincipal">
          <div className=" bgContainerMargin">
            <div className="boxprincipal">
              {/* caixa co container com fonte do titulo */}
              <div className="sm-bg-container krona-one-regular ">
                <h1> {t("satsMarket.title")}</h1>
                <h2>{t("satsMarket.subtitle")}</h2>
                {/* gap de 8 com container de botão */}
              </div>

              <div className="btningresso-img container-com-gradiente">
                {/* imagem do container principal da pagina de ingresso esportado como componente */}
                <ImagePatrocinio />
              </div>
              <div className="containerSMcenter">
                <h3> {t("satsMarket.containerTitle")}</h3>
                <h4>{t("satsMarket.contaiinerSubTitler")}</h4>
                <div className="containerSMlist">
                  <ul>
                    <li>{t("satsMarket.art")}</li>
                    <li>{t("satsMarket.books")}</li>
                    <li>{t("satsMarket.shirts")}</li>
                    <li>{t("satsMarket.bones")}</li>
                  </ul>
                  <ul>
                    <li>{t("satsMarket.Craftsmanship")}</li>
                    <li>{t("satsMarket.Electronics")}</li>
                    <li>{t("satsMarket.wallet")}</li>
                    <li>{t("satsMarket.Metals")}</li>
                  </ul>
                  <ul>
                    <li>{t("satsMarket.Souvenirs")}</li>
                    <li>{t("satsMarket.walletMetals")}</li>
                    <li>{t("satsMarket.Pictures")}</li>
                    <li>{t("satsMarket.more")}</li>
                  </ul>
                </div>
                <div className="containerImgSatsMarket">
                  <img
                    src="./satsconf2023/pagamento-em-bitcoin-satsconf-evento-sp.jpg"
                    alt="Homem segurando um iphone fazendo pagamento em lightning"
                  />
                  <img
                    src="./satsconf2023/local-vendas-sao-paulo-eventos-satsconf.jpg"
                    alt="Uma estante de roupas e acessorios do Bitcoin"
                  />
                  <img
                    src="./satsconf2023/venda-wallat-satsconf-evento.jpg"
                    alt="Uma maleta com ferramentas para sua soberania Stackbit"
                  />
                  <img
                    src="./satsconf2023/bitcoin-evento-satsconf-venda-no-local-sp.jpg"
                    alt="Maleta com os acessorios stackbit e wallet metal e outras ferramentas para sua privacidade"
                  />
                  <img
                    src="./satsconf2023/evento-satsconf-venda-local-do-evento.jpg"
                    alt="Pessoas em volta da feira Refugio bitcoin na satsconf"
                  />
                  <img src="./satsconf2023/evento-venda-satsconf.jpg" alt="Caneca e blusa do Bitcoin" />
                </div>
                <div className="containerFormSatsMarket">
                  <h3> {t("satsMarket.titleForm")}</h3>
                  <h4> {t("satsMarket.subtitleForm")}
                  </h4>
                  <TypeformSatsMarket />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SatsMarket;
