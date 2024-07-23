"use client";
import { useTranslation } from 'react-i18next';
import { IoMdAdd, IoMdClose } from "react-icons/io";
import { useState } from "react";

const FAQqueromeenvolver = () => {
  const { t } = useTranslation();
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleItem = (index) => {
    setSelectedItem(selectedItem === index ? null : index);
  };


const data = [
  {
    question:  t('faqInvolved.sponsor'),
    answer:(
    <>
    <p>{t('faqInvolved.responseSponsor')}</p>
    </>
    ),
  },
  {
    question:  t('faqInvolved.opportunities'),
    answer:(
    <>
    <p>{t('faqInvolved.responseOpportunities')}</p>
    </>
    ),
  },
  {
    question: t('faqInvolved.products'),
    answer:(
    <>
    <p>{t('faqInvolved.responseProducts')}</p>
    </>
    ),
  },
  {
    question:t('faqInvolved.apply'),
    answer:
    (
    <>
    <p>{t('faqInvolved.responseApply')}</p>
    </>
    ),
  },
  {
    question:t('faqInvolved.organize'),
    answer:
    (
    <>
    <p>{t('faqInvolved.responseOrganize')}</p>
    </>
    ),
  },
  {
    question: t('faqInvolved.journalist'),
    answer:
    (
    <>
    <p>{t('faqInvolved.responseJournalist')}</p>
    <br />
    <p>{t('faqInvolved.responseJournalistTwo')}</p>
    <br />
    <p>{t('faqInvolved.responseJournalistthree')}</p>
    </>
    ),
  },
];


  return (
    <section className="faqContainer" id="faq">
      <div className="boxTitle">
        <h2 className="containerTitleFaq">{t('faqInvolved.involed')}</h2>
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

export default FAQqueromeenvolver;
