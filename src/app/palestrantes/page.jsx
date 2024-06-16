"use client"
import React from "react";
//importação global do modalNovidades
import { useContext } from "react";
import { ModalContext } from "@/providers/ModalContext";

import BtnIngresso from "@/components/(landingpage)/ui/button/BtnIngresso";
import BtnNovidades from "@/components/(landingpage)/ui/button/BtnNovidades";
import Card from "@/components/(landingpage)/ui/modal/modalDestaque/profilecard";

const Palestrantes = ({ children }) => {

  const {handleModalVisible} = useContext(ModalContext);

  const handleOpenModal= ()=>{
    handleModalVisible();
  };

  return (
    <div id="PagPalestrantes" >
      {" "}
      {children}
      <section className="bgContainerImageConvidadosPage">
      <div className="bgContainerConvidadosDestaque ">
        <div className="boxprincipalConvidadoDestaque font-white krona-one-regular ">
          <div className="sc-mgem-16 ">
            <span className="sc-fz-24 ">8 e 9 de Novembro | são Paulo</span>
            <h2 className="sc-fz-48 ">
              CONHEÇA OS PALESTRANTES DA EDIÇÃO 2024
            </h2>
          </div>
          <div className="sc-gap-8 container-btn">
            <BtnIngresso url="https://www.satsconf.com.br/ingressos">
              COMPRAR INGRESSO
            </BtnIngresso>
            {/* botão do container principal */}
            <BtnNovidades onClick={handleOpenModal}>RECEBER NOVIDADES</BtnNovidades>
          </div>
        </div>
        <div>
        <Card />
       
        </div>
     
      </div>
    </section>
    </div>
  );
};

export default Palestrantes;
