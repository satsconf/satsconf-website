"use client"

import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";

import { useState, useEffect } from 'react';
  

const BoxSobre = () => {

    const [selectedIcon, setSelectedIcon] = useState(null);

    useEffect(() => {
        // Define o primeiro item como selecionado inicialmente quando a página é carregada
        setSelectedIcon(0);
    }, []);


    const toggle = (i) => {
        setSelectedIcon(selectedIcon === i ? null : i);
    };


    return (
        <div className="bg ">
            <div className="grid-container font-white ">
                <div className="block">
                <h2 className="sc-fz-18">SOBRE A SATS CONF</h2>

                {data.map((item, i) => {
                   return (
                    <div className="item" key={i}>
                        <div className="title" onClick={() => toggle(i)}>
                            <h3>{item.question}</h3>
                            <span className="icon-wrapper">
                            {selectedIcon === i ? <FiMinusCircle className="icon" /> : <FiPlusCircle className="icon" />}
                                </span>
                        </div>
                        <div className="content" style={{ display: selectedIcon === i ? 'flex' : 'none' }}>{item.answer}</div>
                    </div>
                );
                })}
                </div>
                <div className="containerVideo">
               
                <p>teste</p>

                
                </div>
   
            </div>
        </div>
    )
}

const data = [
    {
        question:'O que é a Satsconf?',
            answer:
            'Lorem ipsum dolor sit amet consectetur adipisicing psum dolor sit amet consectetur adipisicing',
    },
    {
        question:'Pra quem é?',
        answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing',
    },
    {
        question:'Por que ir?',
        answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing',
    }
]

export default BoxSobre;