"use client"
import React from "react";
import { useTranslation } from 'react-i18next';
import Link from "next/link";

const BuyTickets2025 = () => {
  const { t } = useTranslation();
  return (
    <div id="btnComprarReal" className="containerComprarIngressoReal">
      <ul>
        <li>
          <img
            src="ingresso-normal-satsconf.png"
            alt="Comprar ingresso Normal Pass"
          />
        </li>
        <li>
          <span>Normal Pass</span>
        </li>
        <li>R$150</li>
        <li>
          <div >
          <Link className="buttonIngressoComprar"
              href="https://checkout.opennode.com/p/fbc0a540-b01a-45f7-8fc6-a0cf2b9b9f7f"
              // onClick={() => {
              //   cookie.set("btn_normal_pass", "button_buy_785846", {
              //     httpOnly: true,
              //     secure: process.env.NODE_ENV === 'production',
              //     sameSite: 'strict'
              //   });
              // }}
            >
              {t('buttons.purchaseNow')}
            </Link>
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
        <li>R$450</li>
        <li>
          <div>
          <Link className="buttonIngressoComprar"
              href="https://checkout.opennode.com/p/04bde7d8-bb30-4890-9612-03ab5f9adcb9"
              // onClick={() => {
              //   cookie.set("btn_vip_pass", "button_buy_584581", {
              //     httpOnly: true,
              //     secure: process.env.NODE_ENV === 'production',
              //     sameSite: 'strict'
              //   });
              // }}
             >
              {t('buttons.purchaseNow')}
            </Link>
          </div>
        </li>
      </ul>


    </div>
  );
};

export default BuyTickets2025;
