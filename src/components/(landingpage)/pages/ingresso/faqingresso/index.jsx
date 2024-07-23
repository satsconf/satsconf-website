"use client";
import React from "react";
import { useTranslation } from 'react-i18next';
import { IoMdAdd, IoMdClose } from "react-icons/io";
import { useState } from "react";

const FAQ = () => {
  const { t } = useTranslation();
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleItem = (index) => {
    setSelectedItem(selectedItem === index ? null : index);
  };


const data = [
  {
    question:t('faqIngresso.received'),

    answer:(
    <>
    <p>{t('faqIngresso.respondeReceived')}</p>
    </>
    ),
  },
  {
    question: t('faqIngresso.upgrade'),
    answer:(
    <>
    <p>{t('faqIngresso.responseUpgrade')}</p>
    </>
    ),
  },
  {
    question: t('faqIngresso.discount'),
    answer:(
    <>
    <p>{t('faqIngresso.responseDiscount')}</p>
    </>
    ),
  },
  {
    question: t('faqIngresso.student'),
    answer:
    (
    <>
        <p>{t('faqIngresso.response')}</p>
    </>
    ),
  },
  {
    question: t('faqIngresso.someone'),
    answer:
    (
    <>
        <p>{t('faqIngresso.responsesomeone')}</p>
    </>
    ),
  },
  {
    question: t('faqIngresso.difference'),
    answer:
    (
    <>
        <p>{t('faqIngresso.differenceResponse')}</p>
    </>
    ),
  },
  {
    question: t('faqIngresso.allowed'),
    answer:
    (
    <>
            <p>{t('faqIngresso.responseallowed')}</p>
    </>
    ),
  },
];

  return (
    <section className="faqContainer" id="faq">
      <div className="boxTitle">
        <h2 className="containerTitleFaq">{t('faqHome.titleFaq')}</h2>
      </div>
      {data.map((item, index) => (
        <div className={`faqItem ${selectedItem === index ? 'open' : ''}`} key={index}>
          <div className="faqHeader" onClick={() => toggleItem(index)}>
            <div className="title">
              <span className="faqNumber" id={`faq-${index}`}>
                {index + 1}
              </span>
              <h3 className="faqQuestion">{item.question}</h3>
              <span className={`faqToggle ${selectedItem === index ? 'open-icon' : ''}`}>
                {selectedItem === index ? (
                  <IoMdClose className="icon" />
                ) : (
                  <IoMdAdd className="icon" />
                )}
              </span>
            </div>
            <div className="faqAnswer" style={{ display: selectedItem === index ? "block" : "none" }}>
               {item.answer}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};


export default FAQ;
