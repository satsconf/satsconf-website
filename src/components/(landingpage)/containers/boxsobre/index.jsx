"use client";

import "animate.css";
import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";


import PlaySatsconf from "../../ui/videos";

const BoxSobre = () => {
  const { t } = useTranslation();
  const [selectedIcon, setSelectedIcon] = useState(null);

  useEffect(() => {
    // Define o primeiro item como selecionado inicialmente quando a página é carregada
    setSelectedIcon(0);
  }, []);

  const toggle = (i) => {
    setSelectedIcon(selectedIcon === i ? null : i);
  };

  const data = [
    {
      question: t('aboutHome.titleQuestionOne'),
      answer: t('aboutHome.responseQuestionOne'),
    },
    {
      question: t('aboutHome.titleQuestionTwo'),
      answer:t('aboutHome.responseQuestionTwo'),
    },
    {
      question: t('aboutHome.titleQuestionThree'),
      answer: t('aboutHome.responseQuestionThree'),
    },
  ];  

  return (
    <section className="bgContainerSobre">
      <div className="font-white boxprincipalSobre">
        <div className="block animate__animated animate__fadeInLeftBig">
          <h2 className="sc-fz-18">{t('aboutHome.aboutTitle')}</h2>

          {data.map((item, i) => {
            return (
              <div className="item" key={i}>
                <div className="title" onClick={() => toggle(i)}>
                  <h3>{item.question}</h3>
                  <span className="icon-wrapper">
                    {selectedIcon === i ? (
                      <FiMinusCircle className="icon" />
                    ) : (
                      <FiPlusCircle className="icon" />
                    )}
                  </span>
                </div>
                <div className={`content ${selectedIcon === i ? "open" : ""}`}>
                  {item.answer}
                </div>
              </div>
            );
          })}
        </div>
        <div className="containerVideo">
        <img src="/video.png" width="314" height="450" alt="" />
        <div className="containerVideoAcima">
        <PlaySatsconf />

        </div>
        </div>
      </div>
    </section>
  );
};


export default BoxSobre;
