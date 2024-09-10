"use client"
import React from "react";
import { useTranslation } from 'react-i18next';
import BtnIngresso from "@/components/(landingpage)/ui/button/BtnIngresso";
import BtnNovidades from "@/components/(landingpage)/ui/button/BtnNovidades";
import { FiCheckCircle, FiMinus } from "react-icons/fi";
import cookie from "js-cookie";

const BoxTabelaIngresso = () => {
  const { t } = useTranslation();
  return (
    <div id="listaIngressoBox" className="backgroundTopIngresso">
       <div className="bgTabelaIngresso ">
      <div className="boxTitle krona-one-regular">
        <h2>{t('included.titleIncluded')}O QUE ESTÁ INCLUSO</h2>
      </div>
      <table className="BoxTabelaIngresso sora-regular sc-fz-18">
        <thead>
          <tr>
            <th className="bordaNone"></th>
            <th className="boxCenter bordaNone">
              <img
                src="/ingresso-normal-satsconf.png"
                alt="ingresso normal satsconf"
              />
            </th>
            <th className="boxCenter bordaNone">
              <img
                src="/ingresso-vip-satsconf.png"
                alt="ingresso VIP satsconf"
              />
            </th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td className="bordaleft">
              {t('included.event')}
              </td>
              <td className="boxCenter">
                {" "}
                <FiCheckCircle size={38} color="white" />{" "}
              </td>
              <td className="boxCenter">
                {" "}
                <FiCheckCircle size={38} color="white" />
              </td>
            </tr>
            <tr>
              <td className="bordaleft">
              {t('included.stage')}</td>
              <td className="boxCenter">
                <FiCheckCircle size={38} color="white" />
              </td>
              <td className="boxCenter">
                {" "}
                <FiCheckCircle size={38} color="white" />
              </td>
            </tr>
            <tr>
              <td className="bordaleft">
              {t('included.rooms')}</td>
              <td className="boxCenter">
                <FiCheckCircle size={38} color="white" />
              </td>
              <td className="boxCenter">
                {" "}
                <FiCheckCircle size={38} color="white" />
              </td>
            </tr>
            <tr>
              <td className="bordaleft">
              {t('included.area')}</td>
              <td className="boxCenter">
                <FiCheckCircle size={38} color="white" />
              </td>
              <td className="boxCenter">
                {" "}
                <FiCheckCircle size={38} color="white" />
              </td>
            </tr>
            <tr>
              <td className="bordaleft">
              {t('included.stasmarket')}
              </td>
              <td className="boxCenter">
                <FiCheckCircle size={38} color="white" />
              </td>
              <td className="boxCenter">
                {" "}
                <FiCheckCircle size={38} color="white" />
              </td>
            </tr>
            <tr>
              <td className="bordaleft">
              {t('included.theEvent')}
              </td>
              <td className="boxCenter">
              <FiCheckCircle size={38} color="white" />
              
              </td>
              <td className="boxCenter">
                {" "}
                <FiCheckCircle size={38} color="white" />
              </td>
            </tr>
           
            <tr>
              <td className="bordaleft">
              {t('included.finneyStages')}
              </td>
              <td className="boxCenter">
                <FiMinus size={38} color="white" />
              </td>
              <td className="boxCenter">
                {" "}
                <FiCheckCircle size={38} color="white" />
                
              </td>
            </tr>
            <tr>
              <td className="bordaleft">
              {t('included.vip')}
              </td>
              <td className="boxCenter">
                <FiMinus size={38} color="white" />
              </td>
              <td className="boxCenter">
                {" "}
                <FiCheckCircle size={38} color="white" />
              </td>
            </tr>
            <tr>
              <td className="bordaleft">
              {t('included.vipfood')}
              </td>
              <td className="boxCenter">
                <FiMinus size={38} color="white" />
              </td>
              <td className="boxCenter">
                {" "}
                <FiCheckCircle size={38} color="white" />
              </td>
            </tr>
            <tr>
              <td className="bordaleft">
              {t('included.privile')}
              </td>
              <td className="boxCenter">
                <FiMinus size={38} color="white" />
              </td>
              <td className="boxCenter">
                {" "}
                <FiCheckCircle size={38} color="white" />
              </td>
            </tr>
            <tr>
              <td className="bordaleft">
              {t('included.SatsParty')}
              </td>
              <td className="boxCenter">
                <FiMinus size={38} color="white" />
              </td>
              <td className="boxCenter">
                {" "}
                <FiCheckCircle size={38} color="white" />
                
              </td>
            </tr>
          </tbody>
      </table>
      <div className="sc-gap-8 containerBtnIngresso">
        <BtnIngresso url="#comprarqui" onClick={() =>{
            cookie.set("btn_lp_global-buy", "btn_55117878", {
              httpOnly: true,
              secure: process.env.NODE_ENV === 'production',
              sameSite: 'strict'
            })
          }}>
          {t('buttons.purchase')}
        </BtnIngresso>
        {/* botão do container principal */}
        <BtnNovidades url="https://chat.whatsapp.com/JLDl4QZwwXb1htqScSJXgq">
        {t('buttons.grupo')}</BtnNovidades>
      </div>
    </div>
    </div>
   
  );
};

export default BoxTabelaIngresso;
