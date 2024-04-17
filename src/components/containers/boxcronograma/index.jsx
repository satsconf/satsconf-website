import SatsConf from "@/components/images/MeuComponenteSatsConf";
import SatsParty from "@/components/images/Satsparty";
import SatsWeek from "@/components/images/satsweek";

const BoxCronograma = () => {
  return (
  

      <div className="bgContainerCronograma">
        {/* componente cronograma */}
        <h3 className="krona-one-regular sc-fz-36">Cronograma SATS CONF 2024</h3>
        <div className="boxCronograma">
          <div className="boxItemCronograma">
            <h4>8 e 9 de Novembro</h4>
            <div className="imageCronograma ">
            <SatsConf />

            </div>
            <p>Palestras, painéis, workshops, competições, jogos, networking, comidas, bebidas, lojas e muito mais.</p>
            <span className="krona-one-regular ">Audio | São Paulo</span>
          </div>
          <div className="boxItemCronograma ">
            <h4>10 de Novembro</h4>
            <div className="imageCronograma">
            <SatsParty />
            </div>
         
            <p>Uma festa exclusiva para os VIPs com ótima comida e networking com palestrantes e influenciadores.</p>
            <span className="krona-one-regular ">Local Secreto </span>
          </div>
          <div className="boxItemCronograma">
            <h4>4 a 10 de Novembro</h4>
            <div className="imageCronograma">
            <SatsWeek />
            </div>
         
            <p>Uma semana inteira com vários tipos de eventos, encontros, festas e celebrações da comunidade bitcoiner.</p>
            <span className="krona-one-regular ">Por toda São Paulo</span>
          </div>
        </div>
      </div>

    
  )
}

export default BoxCronograma;