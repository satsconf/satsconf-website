"use client";

import { IoMdAdd, IoMdClose } from "react-icons/io";
import { useState } from "react";

const FAQcontato = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleItem = (index) => {
    setSelectedItem(selectedItem === index ? null : index);
  };

  return (
    <section className="faqContainer" id="faq">
      <div className="boxTitle">
        <h2 className="containerTitleFaq">FAQ</h2>
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

const data = [
  {
    question:
      "Como posso patrocinar a Satsconf 2024?",
    answer:(
    <>
    <p>Para mais informações sobre patrocínio, por favor entre em contato com info@satsconf.com.br ou preencha o formulário de contato utilizando o e-mail da sua empresa. </p>
    </>
    ),
  },
  {
    question: "Quero organizar um evento SATélite da Satsconf",
    answer:(
    <>
    <p>Isso é ótimo! Adoramos ver a comunidade se envolver e contribuir para a causa de bitcoinizar o Brasil. Envie um e-mail para info@satsconf.com.br com todos os detalhes do seu evento, incluindo nome, temática, data, hora, local e uma imagem para a divulgação. Não se esqueça de incluir informações sobre os organizadores do evento. Estamos ansiosos para ajudar a amplificar o alcance do seu evento!</p>
    </>
    ),
  },
  {
    question:
      "Não encontrou a resposta para sua pergunta?",
    answer:(
    <>
    <p>Entre em contato com info@satsconf.com.br ou visite nosso grupo no Telegram, onde alguém da organização ou mesmo outro participante do evento podem te ajudar.</p>
    </>
    ),
  },
];

export default FAQcontato;
