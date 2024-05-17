"use client";

import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import { useState } from "react";

const FAQ = () => {
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
        <div className="faqItem " key={index}>
          <div className="faqHeader">
            <div className="title" onClick={() => toggleItem(index)}>
              <span className="faqNumber" id={`faq-${index}`}>
                {index + 1}
              </span>
              <h3 className="faqQuestion">{item.question}</h3>
              <span className="faqToggle">
                {selectedItem === index ? (
                  <FiMinusCircle className="icon" />
                ) : (
                  <FiPlusCircle className="icon" />
                )}
              </span>
            </div>
            <div
              className="faqAnswer"
              style={{ display: selectedItem === index ? "block" : "none" }}
            >
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
      "Ainda não sei quem vai usar o ingresso, posso trocar o titular depois?",
    answer:
      "Claro! Você pode comprar o ingresso agora usando o seu nome, e realizar a troca para um novo titular até 75h antes do evento acontecer.",
  },
  {
    question: "Posso parcelar meu inglesso via cartão? Tem juros?",
    answer:
      "Pode! Em caso de parcelamento, é cobrada uma taxa de parcelamento única de 3.49% a.m para qualquer quantidade de parcelas que você escolher.",
  },
  {
    question:
      "Ainda não decidi que dia ir, posso trocar a data do diário depois?",
    answer:
      "A data do ingresso Diário não pode ser alterada. Sugerimos que você adquira o ingresso Passaporte e garanta o melhor preço para aproveitar os 3 dias.",
  },
];

export default FAQ;
