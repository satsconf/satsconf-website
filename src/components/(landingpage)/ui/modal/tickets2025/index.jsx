"use client"
import React from "react";
import { Trans, useTranslation } from 'react-i18next';
import { useState } from 'react';
import CompraReal from '../../button/Comprar/ingressoReal';
import CompraBtc from '../../button/Comprar/ingressoBtc';
import BuyTickets2025 from "@/components/(landingpage)/ui/button/Comprar/BuyTickets2025";

const Tickets2025 = () => {
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
    <div className="boxIngressoComprar" id='comprarqui' style={{ paddingTop: "100px" }}>
      <span>{t('tickets.choose')}</span>
      <div className="conteudoIngresso">
        <BuyTickets2025 />
      </div>
    </div>
    );
  };

export default Tickets2025;
