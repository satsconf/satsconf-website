"use client"

import { FiCheckCircle } from "react-icons/fi";

import MeuComponenteLogo from "@/components/images/MeuComponenteLogo";

const BoxGarante = () => {
  return (
<div className="backgroundTop">
<div className="bgContainerGarante font-white">

      <h2 className="krona-one-regular">Garante seu ingresso agora mesmo!</h2>
      <div className="boxGarante">
        <div className="boxItem boxColorPrimary">
          <span>2 A 4 NOVEMBRO</span>
          <di className="boxLogoGarante">
          <MeuComponenteLogo />
          </di>
          
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
        </div>
        <div className="boxItemTwo boxColorSecundary">
          <span>2 A 6 NOVEMBRO</span>

          <ul>
            <li>teste</li>
            <li>teste</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BoxGarante;
