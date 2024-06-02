import Link from "next/link";
import BtnIngresso from "@/app/[lang]/(landingpage)/ui/button/BtnIngresso";

const SatsPartyImgEvento = () => {
  return (
    <div className="BoxSatsParty">
      <div className="ContainerSatsPartyEvento">
        <div className="gallerySatsParty  ">
          <div className=" img1">
            <img
              src="/evento-bitcoin-satsconf-mulheres-bitconheiras.png"
              alt="Image 1"
            />
          </div>
          <div className=" img2">
            <img src="/evento-bitcoin-satsconf-sao-paulo.png" alt="Image 2" />
          </div>
          <div className=" img4">
            <img src="/evento-bitcoin-sao-paulo.png" alt="Image 4" />
          </div>
          <div className=" img5">
            <img src="/maior-evento-bitcoin-brasil.png" alt="Image 5" />
          </div>
          <div className=" img6">
            <img src="/bitcoin-evento-satsconf.png" alt="Image 6" />
          </div>
          <div className=" img7">
            <img src="/bitcoin-evento.png" alt="Image 7" />
          </div>
          <div className=" img8">
            <img src="/evento-bitcoin-brasil.png" alt="Image 8" />
          </div>
          <div className=" img9">
            <img src="/evento-satsconf-saiba-mais.png" alt="Image 9" />
          </div>
          <div className=" img10">
            <img src="/comprar-ingresso-bitcoin.png" alt="Image 10" />
          </div>
          <div className=" img11">
            <img src="/comprar-ingresso-bitcoin.png" alt="Image 11" />
          </div>
          <div className=" img12">
            <img src="/quem-somos-nos-satsconf.png" alt="Image 12" />
          </div>
          <div className=" img13">
            <img src="/satsconf-evento-brazil.png" alt="Image 13" />
          </div>
       
          <div className=" img14">
            <img
              src="/sats-evento-bitcoin-sp-brazil-sats-conf-evento-bitcoin.png"
              alt="Image 14"
            />
          </div>
          <div className=" img15">
            <img
              src="/sats-evento-bitcoin-sp-brazil-sats-conf-evento-bitcoin.png"
              alt="Image 15"
            />
          </div>
        </div>
        <div className=" img16 itemSatsPartyEvento ">
          <div className="container-div-bottom-satsparty">
            <h4>
              FAÇA PARTE DESSE MOMENTO NESTA EDIÇÃO, GARANTA AGORA SEU INGRESSO
              VIP
            </h4>
            <div className="container-btn-satsparty">
              <BtnIngresso url="/">COMPRAR SEU INGRESSO VIP AGORA </BtnIngresso>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SatsPartyImgEvento;
