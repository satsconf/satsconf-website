"use client";

import Link from "next/link";
import { Trans, useTranslation } from "react-i18next";
import { FiCheckCircle } from "react-icons/fi";
import MeuComponenteLogo from "../../images/MeuComponenteLogo";
import MeuComponenteIgressoVip from "../../images/ImageLogoVip";
import BtnCronograma from "../../ui/button/BtnCronograma";
import BoxCronograma from "../boxcronograma";
import BoxPatrocinadores from "../boxpatrocinadores";

const BoxGarante = () => {
  const { t } = useTranslation();
  return (
    <section className="backgroundTop" id="programacao">
      <div className="bgContainerGarante font-white">
        <h2 className="krona-one-regular sc-fz-36 boxTitle">
          {t("meet.titlePrimary")}
        </h2>
        <div className="boxGarante">
          <div className="boxItem boxColorPrimary">
            <span className="krona-one-regular ">{t("meet.titleMeet")}</span>
            <div className="boxLogoGarante imagensLogoConatinerSite">
              <MeuComponenteLogo />
            </div>

            <ul className="boxListGarante">
              <li>
                <div className="icon-garante">
                  <FiCheckCircle color="white" />
                </div>

                <p> {t("meet.one")}</p>
              </li>
              <li>
                <div className="icon-garante">
                  <FiCheckCircle color="white" />
                </div>
                <p> {t("meet.two")}</p>
              </li>
              <li>
                <div className="icon-garante">
                  <FiCheckCircle color="white" />
                </div>

                <p>{t("meet.three")}</p>
              </li>
              <li>
                <div className="icon-garante">
                  <FiCheckCircle color="white" />
                </div>
                <p>{t("meet.four")}</p>
              </li>
              <li>
                <div className="icon-garante">
                  <FiCheckCircle color="white" />
                </div>
                <p>{t("meet.five")}</p>
              </li>
              <li>
                <div className="icon-garante">
                  <FiCheckCircle color="white" />
                </div>
                <p>{t("meet.six")}</p>
              </li>
            </ul>
            <div className="containerbtnHome marginBottonHomeCronograma">
              <Trans
                i18nKey="buttons.buttonMeet"
                components={[
                  <BtnCronograma url="https://www.satsconf.com.br/ingressos"></BtnCronograma>,
                ]}
              ></Trans>
            </div>
          </div>

          <div className="boxItem boxColorSecundary">
            <span className="krona-one-regular ">
              {t("meetVip.titleMeetVip")}{" "}
            </span>
            <div className="boxLogoGarante imagensLogoConatinerSite">
              <MeuComponenteIgressoVip />
            </div>

            <ul className="boxListGarante">
              <li>
                <div className="icon-garante">
                  <FiCheckCircle color="white" />
                </div>

                <p style={{ fontWeight: "bold" }}> {t("meetVip.oneVip")} </p>
              </li>
              <li>
                <div className="icon-garante">
                  <FiCheckCircle color="white" />
                </div>
                <p>{t("meetVip.twoVip")}</p>
              </li>
              <li>
                <div className="icon-garante">
                  <FiCheckCircle color="white" />
                </div>
                <p>{t("meetVip.threeVip")}</p>
              </li>
              <li>
                <div className="icon-garante">
                  <FiCheckCircle color="white" />
                </div>
                <p> {t("meetVip.fourVip")}</p>
              </li>
              <li>
                <div className="icon-garante">
                  <FiCheckCircle color="white" />
                </div>
                <p> {t("meetVip.fiveVip")}</p>
              </li>
              <li>
                <div className="icon-garante">
                  <FiCheckCircle color="white" />
                </div>
                <p> {t("meetVip.sixVip")}</p>
              </li>{" "}
            </ul>

            <div className="containerbtnHome marginBottonHomeCronograma">
              <Trans
                i18nKey="buttons.buttonMeet"
                components={[
                  <BtnCronograma url="https://www.satsconf.com.br/ingressos"></BtnCronograma>,
                ]}
              ></Trans>
            </div>
          </div>
        </div>
        <BoxCronograma />
        <BoxPatrocinadores />
      </div>

    </section>
  );
};

export default BoxGarante;
