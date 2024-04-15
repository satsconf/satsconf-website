import MeuComponenteEvento from "@/components/images/MeuComponenteEvento/index.jsx";
import BtnIngresso from "@/components/ui/button/BtnIngresso/index.jsx";
import BtnNovidades from "@/components/ui/button/BtnNovidades/index.jsx";

const BoxPrincipal = () => {
  return (
    <div className="bgContainerPrincipal">
      <div className="boxprincipal">
        <div className="sc-bg-container krona-one-regular ">
          <span>8 e 9 DE NOVEMBRO | SÃO PAULO</span>
          <h1>MAIOR EVENTO 100% BITCOIN DO BRASIL</h1>
          <div className="sc-gap-16 container-btn">
            <BtnIngresso url="https://www.example.com">
              COMPRAR INGRESSO
            </BtnIngresso>
            <BtnNovidades url="/">RECEBER NOVIDADES</BtnNovidades>
          </div>
        </div>

        <div className="btningresso-img container-com-gradiente">
          <MeuComponenteEvento />
        </div>
      </div>
    </div>
  );
};

export default BoxPrincipal;
