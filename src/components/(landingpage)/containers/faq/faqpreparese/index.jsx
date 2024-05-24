"use client";

import { IoMdAdd, IoMdClose } from "react-icons/io";
import { useState } from "react";

const FAQpreparese = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleItem = (index) => {
    setSelectedItem(selectedItem === index ? null : index);
  };

  return (
    <section className="faqContainer" id="faq">
      <div className="boxTitle">
        <h2 className="containerTitleFaq">Prepare-se para o evento</h2>
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
      "Não sou de São Paulo, para qual aeroporto ou rodoviária devo comprar minha passagem?",
    answer:(
    <>
    <p>Se você está vindo de avião, o Aeroporto Internacional de Guarulhos (GRU) e o Aeroporto de Congonhas (CGH) são as principais opções para voos domésticos e internacionais. A preferência por um ou outro aeroporto, porém, depende da disponibilidade e preço de passagens partindo do seu local de origem. O Aeroporto Internacional de Guarulhos é mais distante do centro de São Paulo, porém existem opções de locomoção por trem/metrô partindo de lá. Já o Aeroporto de Congonhas é mais central, porém para se locomover desde lá é necessário usar Uber, táxi ou ônibus, que pode envolver tráfego dependendo do horário. </p>
    <br />
    <p>Se você preferir viajar de ônibus, a Rodoviária do Tietê é a maior e mais movimentada do país. Já a Rodoviária da Barra Funda é mais próxima do local do evento. Planeje sua viagem com base em sua conveniência e disponibilidade de transporte.</p>
    </>
    ),
  },
  {
    question: "Vocês têm recomendações de hotel para estadia em São Paulo durante a Satsconf?",
    answer:(
    <>
    <p>São Paulo possui uma vasta oferta de acomodações, desde hotéis a albergues e aluguéis por temporada, adequados para diferentes necessidades e orçamentos. Recomendamos que você verifique sites de reserva para encontrar a opção que melhor se adapte às suas necessidades.</p>
    <br/>
    <p>Os hotéis mais próximos do local do evento incluem Bê Hotel, Plaza Inn, Panamby e Transamérica Executive Perdizes. A escolha do hotel vai depender do seu orçamento e do nível de conforto desejado.</p>
    <br />
    <p>No entanto, não é necessário se restringir a hotéis próximos ao local do evento. Recomendamos também considerar acomodações perto de uma estação de metrô para facilitar o deslocamento. O local principal do evento está localizado perto da estação de metrô Barra Funda, acessível por várias linhas de metrô. Os meetups e eventos paralelos ocorrerão em diferentes locais, mas geralmente também estarão próximos a estações de metrô.</p>
    </>
    ),
  },
  {
    question:
      "Devo levar meu laptop ou uma mochila? O local do evento possui guarda-volumes?",
    answer:(
    <>
    <p>O evento proporcionará oportunidades para networking e aprendizado, mas não é necessário trazer seu laptop a menos que você pretenda participar do hackathon ou de workshops técnicos. O local do evento conta com guarda-volumes, mas o espaço é limitado, então recomendamos trazer apenas o essencial.</p>
    </>
    ),
  },
  {
    question:
      "Posso levar uma câmera fotográfica?",
    answer:
    (
    <>
    <p>Sim, câmeras fotográficas são permitidas, mas tenha em mente que o evento terá participantes de todas as idades. Por favor, seja respeitoso com os que estão ao seu redor! Além disso, tenha cuidado ao tirar fotografias e usar a câmera do celular, pois nem todos os bitcoiners desejam ser incluídos em fotos. </p>
    <br />
    <p>Se você está extremamente preocupado com a privacidade, considere usar uma máscara de privacidade.</p>
    </>
    ),
  },
  {
    question:
      "Será vendido álcool e comida durante o evento? Posso levar minha própria comida?",
    answer:
    (
    <>
    <p>O evento terá áreas de alimentação com uma variedade de opções de comida e bebida, incluindo opções alcoólicas. Não será permitida a entrada no local do evento com alimentos ou bebidas adquiridos externamente. </p>
    </>
    ),
  },
  {
    question:
      "Preciso levar Bitcoin ao evento? Quanto?",
    answer:
    (
    <>
    <p>As áreas de alimentação e lojas do evento apenas aceitarão pagamentos em Bitcoin através da Lightning Network. Se você não tiver Bitcoin, teremos também opções para compra de Bitcoin durante o evento, através de parceiros. O quanto trazer depende do quanto você pretende gastar durante o evento. Carregue uma carteira Lightning apenas com quantidade suficiente para os gastos durante o evento, não traga sua hardware wallet e não traga grandes valores em Bitcoin para o evento.</p>
    </>
    ),
  },
  {
    question:
      "Posso levar meu pet ao evento?",
    answer:
    (
    <>
    <p>Infelizmente, não é permitida a entrada de animais de estimação no evento, com exceção de cães-guia para pessoas com deficiência visual.</p>
    </>
    ),
  },
  {
    question:
      "Não encontrou a resposta para sua pergunta? ",
    answer:
    (
    <>
    <p>Entre em contato com info@satsconf.com.br ou visite nosso grupo no Telegram, onde alguém da organização ou mesmo outro participante do evento podem te ajudar.</p>
    </>
    ),
  },
];

export default FAQpreparese;
