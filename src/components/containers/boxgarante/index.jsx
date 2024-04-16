"use client"

import Link from "next/link";
import { FiCheckCircle } from "react-icons/fi";
import MeuComponenteLogo from "@/components/images/MeuComponenteLogo";
import MeuComponenteIgressoVip from "@/components/images/ImageLogoVip";
import BtnCronograma from "@/components/ui/button/BtnCronograma";


const BoxGarante = () => {
  return (
    <div className="backgroundTop">
      <div className="bgContainerGarante font-white">

        <h2 className="krona-one-regular sc-fz-36">Garante seu ingresso agora mesmo!</h2>
        <div className="boxGarante">
          <div className="boxItem boxColorPrimary">
            <span className="krona-one-regular ">2 A 4 NOVEMBRO</span>
            <div className="boxLogoGarante">
              <MeuComponenteLogo />
            </div>

            <ul className="boxListGarante">
              <li>
                <FiCheckCircle size={20} color="white" /> Acesso a palestras do
                Palco X
              </li>
              <li>
                <FiCheckCircle size={20} color="white" /> Acesso a palestras do
                Palco X
              </li>
              <li>
                <FiCheckCircle size={20} color="white" /> Acesso a palestras do
                Palco X
              </li>
              <li>
                <FiCheckCircle size={20} color="white" /> Acesso a palestras do
                Palco X
              </li>

            </ul>
            <BtnCronograma url=""> ESGOTADO</BtnCronograma>
          </div>

          <div className="boxItemTwo boxColorSecundary">
            <span className="krona-one-regular ">2 A 6 NOVEMBRO</span>
            <di className="boxLogoGarante">
              <MeuComponenteIgressoVip />
            </di>

            <ul className="boxListGarante">
              <li>
                <FiCheckCircle size={20} color="white" /> Acesso a palestras do
                Palco X ssssssssssssssssssssssssssssss
              </li>
              <li>
                <FiCheckCircle size={20} color="white" /> Acesso a palestras do
                Palco X
              </li>
              <li>
                <FiCheckCircle size={20} color="white" /> Acesso a palestras do
                Palco X
              </li>
              <li>
                <FiCheckCircle size={20} color="white" /> Acesso a palestras do
                Palco X
              </li>
              <li>
                <FiCheckCircle size={20} color="white" /> Acesso a palestras do
                Palco X
              </li>
              <li>
                <FiCheckCircle size={20} color="white" /> Acesso a palestras do
                Palco X
              </li>  <li>
                <FiCheckCircle size={20} color="white" /> Acesso a palestras do
                Palco X
              </li>
              <li>
                <FiCheckCircle size={20} color="white" /> Acesso a palestras do
                Palco X
              </li>
              <li>
                <FiCheckCircle size={20} color="white" /> Acesso a palestras do
                Palco X
              </li>
              <li>
                <FiCheckCircle size={20} color="white" /> Acesso a palestras do
                Palco X
              </li>
            </ul>
            <div className="boxListGaranteInfo">
              <p>*Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

            </div>
            <BtnCronograma url=""> COMPRAR INGRESSO AGORA</BtnCronograma>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxGarante;
