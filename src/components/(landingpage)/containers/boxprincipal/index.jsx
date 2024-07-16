"use client"
import React from "react";

//importação global do modalNovidades
import { useContext } from "react";
import { ModalContext } from "@/providers/ModalContext";
//componentes do site
import MeuComponenteEvento from "../../images/MeuComponenteEvento";
import BtnIngresso from "../../ui/button/BtnIngresso";
import BtnNovidades from "../../ui/button/BtnNovidades";
import cookie from "js-cookie";
import { FiMapPin } from "react-icons/fi";


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
              <div className="sc-bg-container krona-one-regular lineTitle-45">
              <span>8 E 9 DE NOVEMBRO</span>
                <br />
               
                <h1>MAIOR EVENTO 100% BITCOIN DO BRASIL</h1>
                <p className="pLocal"> <FiMapPin />
                
                AUDIO | SÃO PAULO
                </p>
                {/* gap de 16 com container de botão */}
                <div className="sc-gap-16 container-btn">
                  <BtnIngresso url="https://www.satsconf.com.br/ingressos"onClick={() =>{
            cookie.set("btn_lp_global-buy", "btn_55117878", {
              httpOnly: true,
              secure: process.env.NODE_ENV === 'production',
              sameSite: 'strict'
            })
          }}>
                  
                  COMPRAR INGRESSO</BtnIngresso>
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
