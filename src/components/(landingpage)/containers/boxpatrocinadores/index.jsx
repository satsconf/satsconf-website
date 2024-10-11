"use client"
import React from "react";
import { useTranslation } from "react-i18next"; 

const BoxPatrocinadores = () => {
  const { t } = useTranslation();
  return (
    <section className="backgroundBottom">
      <div className="bgContainerPatrocinadores ">
        <div className="krona-one-regular  font-white ">
          <div className="ContainerBoxPatrocinadores">
            <h2 className="sc-fz-36 boxTitle">{t('Sponsors.title')} </h2>
            <div className="boxPatrocinadores">
              <h3>Bitcoin</h3>
              <ul className="boxListPatrocinadores">
                <li>
                  {" "}
                  <img className="cotaPremium" src="/patrocinio/bipa-logo-dark-horizontal.png" alt="Bipa" />
                </li>
                <li>
                  {" "}
                  <img className="cotaPremium"  src="/patrocinio/HRF-logo_HRF-logo.svg" alt="HRF" />
                </li>
               
              </ul>
            </div>
            <div className="boxPatrocinadores">
              <h3>{t('Sponsors.one')}</h3>
              <ul className="boxListPatrocinadores">
                <li>
                  {" "}
                  <img className="cotaBase" src="/patrocinio/Truther.png" alt="Truther" />
                </li>
                <li>
                  {" "}
                  <img className="cotaBase" src="/patrocinio/Tether.png" alt="Tether" />
                </li>
                <li>
                  {" "}
                  <img className="cotaBase" src="/patrocinio/vinteum.png" alt="vinteum" />
                </li>
               
              </ul>
            </div>
            <div className="boxPatrocinadores">
              <h3>{t('Sponsors.two')}</h3>
              <ul className="boxListPatrocinadores">
                <li>
                  {" "}
                  <img className="cotaBase" src="/patrocinio/Fedi.png" alt="Fedi" />
                </li>
                <li>
                  {" "}
                  <img className="cotaBase" src="/patrocinio/Lightspark.svg" alt="Lightspark" />
                </li>
                <li>
                  {" "}
                  <img className="cotaBase" src="/patrocinio/logo-ripio.png" alt="ripio" />
                </li>
               
              </ul>
            </div>
            <div className="boxPatrocinadores">
              <h3>{t('Sponsors.for')}</h3>
              <ul className="boxListPatrocinadores">
       
                <li>
                  {" "}
                  <img className="cotaBase" src="/patrocinio/eulen.svg" alt="Eulen" />
                </li>
                <li>
                  {" "}
                  <img className="cotaBase" src="/patrocinio/Stakwork.png" alt="Stakwork" />
                </li>
               
                <li>
                  {" "}
                  <img className="cotaBase" src="/patrocinio/Seetee.png" alt="Seetee" />
                </li>
                <li>
                  {" "}
                  <img className="cotaBase" src="/patrocinio/Debifi.png" alt="Debifi" />
                </li>
              </ul>
            </div>
            <div className="boxPatrocinadores">
              <h3>{t('Sponsors.five')}</h3>
              <ul className="boxListPatrocinadores">
                <li>
                  {" "}
                  <img className="cotaBase" src="/patrocinio/trezor.svg" alt="trezor" />
                </li>
                <li>
                  {" "}
                  <img className="cotaBase" src="/patrocinio/PlanBNetwork.png" alt="PlanBNetwork" />
                </li>
                <li>
                  {" "}
                  <img className="cotaBase" src="/patrocinio/coinkite-logo-main.svg" alt="Coinkite" />
                </li>
               
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoxPatrocinadores;
