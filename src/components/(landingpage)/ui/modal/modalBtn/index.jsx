"use client"
import { useState } from 'react';
import ShopifyBuyButton from "@/components/(landingpage)/ui/button/Comprar/ingressoBtc";

const IngressoBtn = () => {
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
    <div className="boxIngressoComprar">
      <div className="botaoContainerBtcRl">
        <button id='btnBtc' className={mostrarBTC ? 'active' : ''} onClick={handleSelecionarBTC}>Comprar BTC</button>
        <button id='btnReal' className={!mostrarBTC ? 'active' : ''} onClick={handleSelecionarReal}>Comprar em Reais</button>
      </div>
      <div className="conteudoIngresso">
        {mostrarBTC ? (
          <div>      
            <ShopifyBuyButton />
          </div>
        ) : (
          <div>
          <ShopifyBuyButton />
          </div>
        )}
      </div>
    </div>
    );
  };
  
  export default IngressoBtn;