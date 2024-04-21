"use client"

import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import { useState } from 'react';

const FAQ = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const toggleItem = (index) => {
        setSelectedItem(selectedItem === index ? null : index);
    };

    return (
        <div className="faqContainer">
            <h2 className="containerTitleFaq">FAQ</h2>
            {data.map((item, index) => (
                <div className="faqItem " key={index}>
                  <div className="faqHeader">
                  <div className="title" onClick={() => toggleItem(index)}>
                        <span className="faqNumber" id={`faq-${index}`}>{index + 1}</span>
                        <h3 className="faqQuestion">{item.question}</h3>
                        <span className="faqToggle">
                            {selectedItem === index ? <FiMinusCircle className="icon" /> : <FiPlusCircle className="icon" />}
                        </span>
                    </div>
                    <div className="faqAnswer" style={{ display: selectedItem === index ? 'block' : 'none' }}>
                        {item.answer}
                    </div>
                  </div>
                  
                </div>
            ))}
        </div>
    );
};

const data = [
    {
        question: 'O que é a Satsconf?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing psum dolor sit amet consectetur adipisicing',
    },
    {
        question: 'Pra quem é?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing',
    },
    {
        question: 'Por que ir?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing',
    }
];

export default FAQ;
