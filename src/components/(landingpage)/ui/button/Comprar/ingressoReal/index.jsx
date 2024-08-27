"use client"
import Link from "next/link";

import React from "react";
import { useTranslation } from 'react-i18next';

const CompraReal = () => {
  const { t } = useTranslation();
  return (
    <div id="btnComprarReal" className="containerComprarIngressoReal">
      <ul>
        <li>
          <img src="ingresso-normal-satsconf.png" alt="Comprar ingresso Normal Pass" />
        </li>
        <li>
          <span>Normal Pass</span>
        </li>
        <li>R$300</li>
        <li>
        <div >
          <Link className="buttonIngressoComprar" href="https://ingresso.satsconf.com.br/cart/41610642194567:1?storefront=true">
          {t('tickets.buy')}</Link>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <img src="ingresso-vip-satsconf.png" alt="Comprar ingreso Vip Pass" />
        </li>
        <li>
          <span>VIP Pass</span>
        </li>
        <li>R$800</li>
        <li>
          <div >
          <Link className="buttonIngressoComprar" href="https://ingresso.satsconf.com.br/cart/41610646388871:1?storefront=true">{t('tickets.buy')}</Link>
          </div>
        </li>
      </ul>
      <div className="boxDescontoIngresso">
        <h3>{t('tickets.attention')}</h3>
      </div>
    </div>
  );
};

export default CompraReal;
