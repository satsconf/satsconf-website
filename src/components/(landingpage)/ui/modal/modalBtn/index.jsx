"use client"
import React from "react";
import { Trans, useTranslation } from 'react-i18next';
import { useState } from 'react';
import CompraReal from '../../button/Comprar/ingressoReal';
import CompraBtc from '../../button/Comprar/ingressoBtc';

const IngressoBtn = () => {
  const { t } = useTranslation();
    const [mostrarBTC, setMostrarBTC] = useState(true);

    useState(() => {

         // Definir um atraso de 1 segundo (1000 milissegundos) antes de mostrar o botão BTC
         const timeout = setTimeout(() => {
          setMostrarBTC(true);
      }, 10);
      // Limpar o timeout quando o componente for desmontado
      return () => clearTimeout(timeout);
      },[]);
    
      const handleSelecionarBTC = () => {
        setMostrarBTC(true);
      };

      const handleSelecionarReal = () => {
        setMostrarBTC(false);
      };

    return (
    <div className="boxIngressoComprar" id='comprarqui'>
      <span>{t('tickets.choose')}</span>
      <div className="botaoContainerBtcRl" >
        <button id='btnBtc' className={mostrarBTC ? 'active' : ''} onClick={handleSelecionarBTC}>BTC(21% OFF)</button>
        <button id='btnReal' className={!mostrarBTC ? 'active' : ''} onClick={handleSelecionarReal}>Reais(R$)</button>
      </div>
      <div className="conteudoIngresso">
        {mostrarBTC ? (
          <div>      
            <CompraBtc />
          </div>
        ) : (
          <div>
          <CompraReal />
          </div>
        )}
       
      </div>
      <div className="containerIngressoStudent">
      <p>
      {t('tickets.student')}
      <br />
      </p>
      <p>
      <Trans i18nKey="tickets.studentLink">
                    <a href="https://www.satsconf.com.br/ingresso-estudante"></a>
       </Trans>
      </p>
      </div>
  
    
    </div>
    );
  };
  
  export default IngressoBtn;