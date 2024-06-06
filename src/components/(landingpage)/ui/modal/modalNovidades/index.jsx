"use client"
import { useState } from "react";

const ModalNovidades = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  }
    return (
      <div id="bgModalNovidades">
         {showModal && (
        <div className="modalNovidades">
        <div className="containerModalNovidades">
        <div className="headerformulario">
          <div>
            <img src="./novidades-sobre-bitcoin.png" />
          </div>
          <div className="krona-one-regular">
            <h2>RECEBER NOVIDADES</h2>
          </div>
          <div className="modal-header-exit-ingresso">
            <button onClick={handleCloseModal}>x</button>
          </div>
        </div>
        <div className="containerFormulario ">
          <h3>Fique por dentro de todas as novidades da   <strong>SatsConf 2024</strong> </h3>
            <form className="formBox">
              <div className="">
                <label htmlFor="name">Seu nome completo</label>
                <input type="text" name="name" placeholder="Insira seu nome aqui"/>

                <label htmlFor="email">Seu melhor e-mail</label>
                <input type="text" name="email" placeholder="Insira seu email aqui" />

                <label htmlFor="number">Seu Whatsapp</label>
                <input type="tel" name="number" placeholder="Insira seu telefone com DDD" />

              </div>
              <button type="submit">SE INSCREVER PARA RECEBER NOVIDADES</button>
            </form>
        </div>
        </div>
        </div>
         )}
      </div>
    );
  };
  
  export default ModalNovidades;
  