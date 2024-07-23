"use client";
import React from "react";
import { useTranslation } from 'react-i18next';
import { IoMdAdd, IoMdClose } from "react-icons/io";
import { useState } from "react";

const FAQcontato = () => {
  const { t } = useTranslation();
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleItem = (index) => {
    setSelectedItem(selectedItem === index ? null : index);
  };

const data = [
  {
    question: t('contact.how'),
    answer:(
    <>
    <p>{t('contact.responseHow')}</p>
    </>
    ),
  },
  {
    question: t('contact.organize'),
    answer:(
    <>
     <p>{t('contact.responseOrgabize')}</p>
    </>
    ),
  },
  {
    question: t('contact.Didnt'),
    answer:(
    <>
     <p>{t('contact.responseDidnt')}</p>
     </>
    ),
  },
];

  return (
    <section className="faqContainer" id="faq">
      <div className="boxTitle">
        <h2 className="containerTitleFaq">{t('contact.faq')}</h2>
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

export default FAQcontato;
