import BtnIngresso from "@/components/(landingpage)/ui/button/BtnIngresso";
import BtnNovidades from "@/components/(landingpage)/ui/button/BtnNovidades";

const BoxPrincipalPalestrantes = () => {
    return (
        <div className="bgContainerConvidadosDestaque">
            <div className="boxprincipalConvidadoDestaque font-white krona-one-regular ">
                <div className="sc-mgem-16">
                <span className="sc-fz-24 ">8 e 9 de Novembro | são Paulo</span>
            <h2 className="sc-fz-48 ">CONHEÇA OS PALESTRANTES DA EDIÇÃO 2024</h2>
                </div>
            <div className="sc-gap-16 container-btn">
            <BtnIngresso url="https://www.example.com">
              COMPRAR INGRESSO
            </BtnIngresso>
            {/* botão do container principal */}
            <BtnNovidades url="/">RECEBER NOVIDADES</BtnNovidades>
          </div>
            </div>
 
        </div>
    )
}

export default BoxPrincipalPalestrantes;