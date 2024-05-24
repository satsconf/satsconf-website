"use client";

import { IoMdAdd, IoMdClose } from "react-icons/io";
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
      "Comprei meu ingresso com Bitcoin e ainda não recebi",
    answer:(
    <>
    <p>Mais informações em breve.</p>
    </>
    ),
  },
  {
    question: "Comprei o ingresso geral e gostaria de fazer o upgrade para o ingresso VIP",
    answer:(
    <>
    <p>Para fazer o upgrade do seu ingresso, basta nos enviar um e-mail para info@satsconf.com.br e providenciaremos o envio de uma nova fatura com a diferença de valor.</p>
    </>
    ),
  },
  {
    question:
      "Quero comprar vários ingressos, consigo desconto?",
    answer:(
    <>
    <p>Se você está pensando em comprar ingressos para um grupo de 5 ou mais pessoas, temos boas notícias! Envie um e-mail para info@satsconf.com.br para saber mais sobre nossas ofertas de descontos para grupos.</p>
    </>
    ),
  },
  {
    question:
      "Sou estudante, como faço para pagar meia-entrada?",
    answer:
    (
    <>
    <p>Estudantes têm direito à pagar meia para o ingresso geral da Satsconf. Entre em contato conosco em info@satsconf.com.br utilizando seu e-mail de estudante para mais informações. Se você é membro de algum clube na sua universidade ou conhece um grande grupo de colegas interessados em participar, podemos avaliar uma parceria para distribuir alguns ingressos cortesia.</p>
    </>
    ),
  },
  {
    question:
      "Posso transferir meu ingresso para outra pessoa?",
    answer:
    (
    <>
    <p>Mais informações em breve.</p>
    </>
    ),
  },
  {
    question:
      "Qual é a diferença do ingresso VIP?",
    answer:
    (
    <>
    <p>O ingresso VIP oferece uma experiência exclusiva no evento, além de ingresso para a SatsParty. Mais informações em breve.</p>
    </>
    ),
  },
  {
    question:
      "O evento permite a entrada de menores de 18 anos?",
    answer:
    (
    <>
    <p>Sim, menores de 18 anos são permitidos, desde que estejam acompanhados pelos pais ou responsáveis legais. Crianças de até 12 anos não pagam ingresso.</p>
    </>
    ),
  },
];

export default FAQ;
