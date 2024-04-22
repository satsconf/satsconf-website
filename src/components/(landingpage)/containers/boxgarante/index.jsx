"use client"

import Link from "next/link";
import { FiCheckCircle } from "react-icons/fi";
import MeuComponenteLogo from "@/components/(landingpage)/images/MeuComponenteLogo";
import MeuComponenteIgressoVip from "@/components/(landingpage)/images/ImageLogoVip";
import BtnCronograma from "@/components/(landingpage)/ui/button/BtnCronograma";


const BoxGarante = () => {
  return (
    <div className="backgroundTop" id="programacao">
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
                <FiCheckCircle size={20} color="white" /> Acesso ao Palco Nakamoto
              </li>
              <li>
                <FiCheckCircle size={20} color="white" /> Acesso ao Palco Hal Finney
              </li>
              <li>
                <FiCheckCircle size={20} color="white" /> Acesso às salas de Workshop
              </li>
              <li>
                <FiCheckCircle size={20} color="white" /> Acesso à Área de Exposição
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
                <FiCheckCircle size={20} color="white" /> Acesso ao Palco Nakamoto
              </li>
              <li>
                <FiCheckCircle size={20} color="white" /> Acesso ao Palco Hal Finney
              </li>
              <li>
                <FiCheckCircle size={20} color="white" /> Acesso às salas de Workshop
              </li>
              <li>
                <FiCheckCircle size={20} color="white" />Acesso à Área de Exposição
              </li>
              <li>
                <FiCheckCircle size={20} color="white" /> Entrada especial no evento
              </li>
              <li>
                <FiCheckCircle size={20} color="white" /> Assentos VIP na plateia de todas as palestras*
              </li>  <li>
                <FiCheckCircle size={20} color="white" /> Bitcoffe Break com café e snacks**
              </li>
              <li>
                <FiCheckCircle size={20} color="white" /> Espaço VIP com benefícios e surpresas
              </li>
              <li>
                <FiCheckCircle size={20} color="white" /> Acesso privilegiado aos palestrantes
              </li>
              <li>
                <FiCheckCircle size={20} color="white" /> Acesso a SATSPARTY open bar e open food
              </li>
            </ul>
            <div className="boxListGaranteInfo">
              <p>*Números de assentos VIP limitados e sujeito a alteração.</p>

            </div>
            <BtnCronograma url=""> COMPRAR INGRESSO AGORA</BtnCronograma>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxGarante;
