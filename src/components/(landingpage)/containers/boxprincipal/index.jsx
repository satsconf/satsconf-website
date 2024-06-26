"use client"
import React from "react";
//importação global do modalNovidades
import { useContext } from "react";
import { ModalContext } from "@/providers/ModalContext";
//componentes do site
import MeuComponenteEvento from "../../images/MeuComponenteEvento";
import BtnIngresso from "../../ui/button/BtnIngresso";
import BtnNovidades from "../../ui/button/BtnNovidades";

const BoxPrincipal = () => {

  const {handleModalVisible} = useContext(ModalContext);

  const handleOpenModal= ()=>{
    handleModalVisible();
  };

  return (
    <section id="BoxPrincipal">
      <div className="bgContainerImg">
        <div className="bgContainerPrincipal">
          <div className=" bgContainerMargin ">
            <div className="boxprincipal">
              {/* caixa co container com fonte do titulo */}
              <div className="sc-bg-container krona-one-regular ">
                <span>8 e 9 DE NOVEMBRO | SÃO PAULO</span>
                <h1>MAIOR EVENTO 100% BITCOIN DO BRASIL</h1>
                {/* gap de 16 com container de botão */}
                <div className="sc-gap-16 container-btn">
                  <BtnIngresso url="https://www.satsconf.com.br/ingressos">COMPRAR INGRESSO</BtnIngresso>
                  {/* botão do container principal */}
                  <BtnNovidades onClick={handleOpenModal}>RECEBER NOVIDADES</BtnNovidades>
                </div>
              </div>

              <div className="btningresso-img container-com-gradiente ">
                {/* imagem do container principal esportado como componente */}
                <MeuComponenteEvento />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoxPrincipal;
