"use client"
import React from "react";
import { useTranslation } from "react-i18next"; 
import "animate.css";
import SatsConf from "../../images/MeuComponenteSatsConf";
import SatsParty from "../../images/Satsparty/logoSatsParty";
import SatsWeek from "../../images/satsweek";

const BoxCronograma = () => {
  const { t } = useTranslation();
  return (
    <section className="bgContainerCronograma">
      {/* componente cronograma */}
      <h3 className="krona-one-regular sc-fz-36 boxTitle">
    {t('ScheduleSats.titleSchedule')}
      </h3>
      <div className="boxCronograma">
        <div className="boxItemCronograma animate__animated animate__zoomIn">
          <h4>   {t('ScheduleSats.dataOne')}</h4>
          <div className="imageCronograma ">
            <SatsConf />
          </div>
          <p>
          {t('ScheduleSats.textOne')}
       
          </p>
          <span className="krona-one-regular ">  {t('ScheduleSats.DataBottomOne')}</span>
        </div>
        <div className="boxItemCronograma animate__animated animate__zoomIn">
          <h4>{t('ScheduleSats.dataTwo')}</h4>
          <div className="imageCronograma">
            <SatsParty />
          </div>

          <p>
          {t('ScheduleSats.textTwo')}
        
          </p>
          <span className="krona-one-regular ">  {t('ScheduleSats.dataBottonTwo')} </span>
        </div>
        <div className="boxItemCronograma animate__animated animate__zoomIn">
          <h4>{t('ScheduleSats.datathree')}</h4>
          <div className="imageCronograma">
            <SatsWeek />
          </div>

          <p>
          {t('ScheduleSats.textthree')}
          
          </p>
          <span className="krona-one-regular ">  {t('ScheduleSats.dataBottomthree')}</span>
        </div>
      </div>
    </section>
  );
};

export default BoxCronograma;
