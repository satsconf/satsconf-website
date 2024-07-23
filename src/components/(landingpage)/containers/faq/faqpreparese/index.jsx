"use client";
import { useTranslation } from 'react-i18next';
import { IoMdAdd, IoMdClose } from "react-icons/io";
import { useState } from "react";

const FAQpreparese = () => {
  const { t } = useTranslation();
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleItem = (index) => {
    setSelectedItem(selectedItem === index ? null : index);
  };



const data = [
  {
    question:  t('faqEvent.responseAirport'),
    answer:(
    <>
    <p>{ t('faqEvent.responseAirportTwo')}</p>
    <br />
    <p>{ t('faqEvent.responseAirportThree')}</p>
    </>
    ),
  },
  {
    question: t('faqEvent.recommendations'),
    answer:(
    <>
    <p>{ t('faqEvent.responserecommendations')}</p>
    <br/>
    <p>{ t('faqEvent.responserecommendationsTwo')}</p>
    <br />
    <p>{ t('faqEvent.responserecommendationsThree')}</p>
    </>
    ),
  },
  {
    question:t('faqEvent.laptop'),
    answer:(
    <>
    <p>{ t('faqEvent.responseLaptop')}</p>
    </>
    ),
  },
  {
    question:t('faqEvent.camera'),
    answer:
    (
    <>
    <p>{ t('faqEvent.responseCameraOne')}</p>
    <br />
    <p>{ t('faqEvent.responseCameraTwo')}</p>
    </>
    ),
  },
  {
    question: t('faqEvent.available'),
    answer:
    (
    <>
    <p>{ t('faqEvent.responseAvailable')}</p>
    </>
    ),
  },
  {
    question:t('faqEvent.bitcoin'),
    answer:
    (
    <>
    <p>{ t('faqEvent.responseBitcoin')}</p>
    </>
    ),
  },
  {
    question:t('faqEvent.bring'),
    answer:
    (
    <>
    <p>{ t('faqEvent.responseBring')}</p>
    </>
    ),
  },
  {
    question:t('faqEvent.answer'),
    answer:
    (
    <>
    <p>{ t('faqEvent.responseAnswer')}</p>
    </>
    ),
  },
];


  return (
    <section className="faqContainer" id="faq">
      <div className="boxTitle">
        <h2 className="containerTitleFaq">{t('faqEvent.airport')}</h2>
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

export default FAQpreparese;
