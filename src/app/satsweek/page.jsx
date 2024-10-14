import TypeformSatsWeek from "@/components/(landingpage)/containers/typeform/tformSatsWeek";
import ImageSatsWeekPagina from "@/components/(landingpage)/images/satsweek/weekpagina";
import BtnIngresso from "@/components/(landingpage)/ui/button/BtnIngresso";
import { FaCalendarAlt } from "react-icons/fa";
import cookie from "js-cookie";
import BtnIngressoBreve from "@/components/(landingpage)/ui/button/BtnIngressoBreve";

const SatsWeek = ({ children }) => {
  return (
    <div id="pSatsWeek">
      <div className="bgContainerPrincipalImgSatsWeek">
        <div className="bgContainerPrincipal ">
          <div className=" bgContainerMargin">
            <div className="boxprincipal">
              {/* caixa co container com fonte do titulo */}
              <div className="sc-bg-container krona-one-regular ">
                <span className="satsWeekSpan">Semana de eventos satélites <br />organizados pela comunidade</span>
                <h1 className="margem-top-30">
                  <img className="imgSatsWeek" src="./satsweek-pagina.png" alt="" />
                </h1>
                <div className="container-btn-satsparty margem-top-20">
                  {/* <BtnIngresso
                    url="https://www.satsconf.com.br/ingressos"
                    onClick={() => {
                      cookie.set("btn_lp_global-buy", "btn_55117878", {
                        httpOnly: true,
                        secure: process.env.NODE_ENV === "production",
                        sameSite: "strict",
                      });
                    }}
                  >
                    CONHECER EVENTOS
                  </BtnIngresso> */}
                </div>

                {/* gap de 16 com container de botão */}
              </div>

              <div className="btningresso-img container-com-gradiente">
                {/* imagem do container principal da pagina de ingresso esportado como componente */}
                <ImageSatsWeekPagina />
              </div>
            </div>
          </div>
        </div>
        <div className="bgSatsWeek">
        <div className="boxTitle ">
          <h2 className="krona-one-regular">EVENTOS </h2>
          <p className="sc-fz-12 sora-light ">
            Confira todos os eventos da Sats Week 2024
          </p>
        </div> 
        {/* RUNNING BITCOIN*/}      
        <div className="bgEventosSatsWeek">
          <div className="boxSatsweek">
            <div className="boxImageWeek">

              <img src="./week/RUNNING-BITCOIN.png" alt="" />
            </div>
            <div className="boxTitlesEventoWeek">
              <div className="boxEventDataWeek">
                <div className="dataWeek">
                
                <FaCalendarAlt />
                <span>7 DE NOVEMBRO ÀS 8H</span>
                <div>
                </div>
               
                
              </div> 
                        
              </div>
            
              <h3 className="krona-one-regular">RUNNING BITCOIN</h3>
              <div className="boxLocal">
                <img src="./local-icon.png" alt="" />
                <span>Parque Ibirapuera</span>
              </div>
             
              <p className="sc-fz-12 sora-light ">Vem correr com outros bitcoiners em homenagem ao Hal Finney e arrecadar doações para a ALS Network, uma organização que apoia pessoas afetadas pela esclerose lateral amiotrófica (ALS). Vamos vender camisetas exclusivas, e todo o lucro será destinado à causa. Bora participar dessa ação especial?</p>
            </div>
            <div className="boxButtonnSatsWeek">
              <BtnIngresso url="https://evento.so/p/evt_ZMH6d4oP9Gbx6qiP"> se inscrever</BtnIngresso>
            </div>
          </div>
        </div>
      
        {/* <div className="bgEventosSatsWeek">
          <div className="boxSatsweek">
            <div className="boxImageWeek">

              <img src="./week/RUNNING-BITCOIN.png" alt="" />
            </div>
            <div className="boxTitlesEventoWeek">
              <div className="boxEventDataWeek">
                <div className="dataWeek">
                
                <FaCalendarAlt />
                <span>7 DE NOVEMBRO ÀS 8H</span>
                <div>
                </div>
               
                
              </div> 
          
            
              </div>
            
              <h3 className="krona-one-regular">DIRTY COIN SCREENING</h3>
              <div className="boxLocal">
                <img src="./local-icon.png" alt="" />
                <span>Cinépolis Shopping JK ou Cine Marquise Conjunto Nacional
                </span>
              </div>
             
              <p className="sc-fz-12 sora-light ">Vem correr com outros bitcoiners em homenagem ao Hal Finney e arrecadar doações para a ALS Network, uma organização que apoia pessoas afetadas pela esclerose lateral amiotrófica (ALS). Vamos vender camisetas exclusivas, e todo o lucro será destinado à causa. Bora participar dessa ação especial?</p>
            </div>
            <div className="boxButtonnSatsWeek">
              <BtnIngresso url=""> se inscrever</BtnIngresso>
            </div>
          </div>
        </div> */}
         {/* ENCONTRO DE ESTUDANTES*/}    
        <div className="bgEventosSatsWeek">
          <div className="boxSatsweek">
            <div className="boxImageWeek">

              <img src="./week/satoshe-louge.png" alt="" />
            </div>
            <div className="boxTitlesEventoWeek">
              <div className="boxEventDataWeek">
                <div className="dataWeek">
                
                <FaCalendarAlt />
                <span>7 DE NOVEMBRO DAS 15 ÀS 17H</span>
                <div>
                </div>
               
                
              </div> 
     
            
              </div>
            
              <h3 className="krona-one-regular">ENCONTRO DE ESTUDANTES</h3>
              <div className="boxLocal">
                <img src="./local-icon.png" alt="" />
                <span>Casa21 | Av. Nhandu, 848</span>
              </div>
             
              <p className="sc-fz-12 sora-light ">
              Chamando todos os alunos! Junte-se a nós neste evento GRATUITO. Reúna-se com outros estudantes e líderes da indústria. Alimentos e brindes fornecidos.
              </p>
            </div>
            <div className="boxButtonnSatsWeek">
              <BtnIngresso url="https://evento.so/p/evt_MMupMTYVPP5MHTvw"> se inscrever</BtnIngresso>
            </div>
          </div>
        </div>
            {/* SATOSHE'S LOUNGE*/}   
        <div className="bgEventosSatsWeek">
          <div className="boxSatsweek">
            <div className="boxImageWeek">

              <img src="./week/Satoshe-Lounge.png" alt="" />
            </div>
            <div className="boxTitlesEventoWeek">
              <div className="boxEventDataWeek">
                <div className="dataWeek">
                
                <FaCalendarAlt />
                <span>7 DE NOVEMBRO DAS 18 ÀS 21H</span>
                <div>
                </div>
               
                
              </div> 
             
            
              </div>
            
              <h3 className="krona-one-regular">SATOSHE'S LOUNGE</h3>
              <div className="boxLocal">
                <img src="./local-icon.png" alt="" />
                <span>Casa21 | Av. Nhandu, 848</span>
              </div>
             
              <p className="sc-fz-12 sora-light ">
                Inscreva-se no Meetup para mulheres, um espaço único para aprender, discutir e compartilhar conhecimentos sobre bitcoin.Não entende de bitcoin? O evento é perfeito para você! É uma entusiasta do assunto? Participe e contribua com suas ideias e experiências!</p>
            </div>
            <div className="boxButtonnSatsWeek">
              <BtnIngresso url="https://www.sympla.com.br/evento/satoshe-s-lounge-meetup/2675543"> se inscrever</BtnIngresso>
            </div>
          </div>
        </div>
            {/* ENCONTRO DE BITCOINHEIROS*/} 
        <div className="bgEventosSatsWeek">
          <div className="boxSatsweek">
            <div className="boxImageWeek">

              <img src="./week/event-btc.jpeg" alt="" />
            </div>
            <div className="boxTitlesEventoWeek">
              <div className="boxEventDataWeek">
                <div className="dataWeek">
                
                <FaCalendarAlt />
                <span>7 DE NOVEMBRO DAS 17 ÀS 23H
                </span>
                <div>
                </div>
               
                
              </div> 
          
            
              </div>
            
              <h3 className="krona-one-regular">ENCONTRO DE BITCOINHEIROS
              </h3>
              <div className="boxLocal">
                <img src="./local-icon.png" alt="" />
                <span>Cervejaria Dogma | R. Fortunato, 236</span>
              </div>
             
              <p className="sc-fz-12 sora-light ">
              Que tal começar a Satsconf com o pé direito? Junte-se a nós na véspera do evento para um encontro descontraído, onde poderemos saborear a cerveja Satoshi, Halfin ou qualquer outra de sua preferência. E tem mais: 10% de desconto em todas as cervejas para pagamentos feitos em bitcoin.                </p>
            </div>
            <div className="boxButtonnSatsWeek">
              <BtnIngresso url="https://evento.so/p/evt_qf9p8k5MYVob5xt2"> se inscrever</BtnIngresso>
            </div>
          </div>
        </div>
           {/* DIA 1 - AFTER PARTY OFICIAL*/} 
        <div className="bgEventosSatsWeek">
          <div className="boxSatsweek">
            <div className="boxImageWeek">

              <img src="./week/satsconf-number-one.png" alt="" />
            </div>
            <div className="boxTitlesEventoWeek">
              <div className="boxEventDataWeek">
                <div className="dataWeek">
                
                <FaCalendarAlt />
                <span>8 DE NOVEMBRO DAS 18 ÀS 22H</span>
                <div>
                </div>
               
                
              </div> 
                          
              </div>
            
              <h3 className="krona-one-regular">SATSCONF DIA 1 - AFTER PARTY OFICIAL</h3>
              <div className="boxLocal">
                <img src="./local-icon.png" alt="" />
                <span>Audio | Av. Francisco Matarazzo, 694</span>
              </div>
             
              <p className="sc-fz-12 sora-light ">
              Depois de um dia cheio de discussões e aprendizado sobre Bitcoin, é hora de relaxar e curtir a noite com a galera na afterparty do primeiro dia da Satsconf! Vem trocar uma ideia, fazer novos contatos e aproveitar um ambiente descontraído com outros bitcoiners. O clima é de celebração da comunidade, então não perca!
                </p>
            </div>
            <div className="boxButtonnSatsWeek">
              <BtnIngresso url="https://evento.so/p/evt_9QH3gDNLYVeexDVk?intRoute=1"> SE INSCREVER</BtnIngresso>
            </div>
          </div>
        </div>
        {/* BIPA'S AFTER PARTY */} 
        <div className="bgEventosSatsWeek">
          <div className="boxSatsweek">
            <div className="boxImageWeek">

              <img src="./week/BIPA.png" alt="" />
            </div>
            <div className="boxTitlesEventoWeek">
              <div className="boxEventDataWeek">
                <div className="dataWeek">
                
                <FaCalendarAlt />
                <span>8 DE NOVEMBRO DAS 19 ÀS 00H</span>
                <div>
                </div>
               
                
              </div> 
              <div className="dataWeekVip">
              <span>EXCLUSIVO</span>
              </div>
                          
              </div>
            
              <h3 className="krona-one-regular">BIPA'S AFTER PARTY </h3>
              <div className="boxLocal">
                <img src="./local-icon.png" alt="" />
                <span>Caulí Dinner Bar | R. Joaquim Antunes, 248</span>
              </div>
             
              <p className="sc-fz-12 sora-light ">
              Evento exclusivo para convidados da Bipa! Aproveite open-bar, open-food e participe de um bate-bola exclusivo com Preston Pysh, fundador do renomado The Investor’s Podcast, e Caio Leta, nosso Head de Conteúdo. 
                </p>
            </div>
            <div className="boxButtonnSatsWeek">
              <BtnIngressoBreve url=""> EM BREVE</BtnIngressoBreve>
            </div>
          </div>
        </div>
         {/* BITDEVS*/} 
        <div className="bgEventosSatsWeek">
          <div className="boxSatsweek">
            <div className="boxImageWeek">

              <img src="./week/bitdevs.jpeg" alt="" />
            </div>
            <div className="boxTitlesEventoWeek">
              <div className="boxEventDataWeek">
                <div className="dataWeek">
                
                <FaCalendarAlt />
                <span>8 DE NOVEMBRO DAS 18H30 ÀS 21H
                </span>
                <div>
                </div>
               
                
              </div> 
              
            
              </div>
            
              <h3 className="krona-one-regular">SÃO PAULO BITDEVS #030
 
              </h3>
              <div className="boxLocal">
                <img src="./local-icon.png" alt="" />
                <span>Audio | Av. Francisco Matarazzo, 694</span>
              </div>
             
              <p className="sc-fz-12 sora-light ">
              Edição especial Satsconf 2024. BitDevs é uma comunidade para aqueles interessados em discutir e participar na pesquisa e desenvolvimento do Bitcoin e protocolos relacionados. Apesar de as discussões serem técnicas, são abertas a interessados de todos os níveis, vem aprender com a gente!
 </p>
            </div>
            <div className="boxButtonnSatsWeek">
              <BtnIngresso url="https://www.meetup.com/pt-BR/clubebitcoinsp/events/303963950/"> se inscrever</BtnIngresso>
            </div>
          </div>
        </div>
           {/* DIA 2 -AFTER PARTY OFICIAL*/} 
        <div className="bgEventosSatsWeek">
          <div className="boxSatsweek">
            <div className="boxImageWeek">

              <img src="./week/satsconf-number-two.png" alt="" />
            </div>
            <div className="boxTitlesEventoWeek">
              <div className="boxEventDataWeek">
                <div className="dataWeek">
                
                <FaCalendarAlt />
                <span>9 DE NOVEMBRO DAS 18 ÀS 23H
                </span>
                <div>
                </div>
               
                
              </div> 
              
            
              </div>
            
              <h3 className="krona-one-regular">SATSCONF DIA 2 - AFTER PARTY OFICIAL
 
              </h3>
              <div className="boxLocal">
                <img src="./local-icon.png" alt="" />
                <span>Audio | Av. Francisco Matarazzo, 694</span>
              </div>
             
              <p className="sc-fz-12 sora-light ">
              Para fechar a Satsconf com chave de ouro, a afterparty do segundo dia promete! Vem comemorar tudo o que rolou no evento, continuar as conversas e se divertir com a comunidade Bitcoin. E vai rolar karaokê!
 </p>
            </div>
            <div className="boxButtonnSatsWeek">
              <BtnIngresso url="https://evento.so/p/evt_8phB8o3ZdSzpVoSQ"> se inscrever</BtnIngresso>
            </div>
          </div>
        </div>
         {/* ENCONTRO RATÉIS DA ESTRADA*/} 
        <div className="bgEventosSatsWeek">
          <div className="boxSatsweek">
            <div className="boxImageWeek">

              <img src="./week/satsparty-event.png" alt="" />
            </div>
            <div className="boxTitlesEventoWeek">
              <div className="boxEventDataWeek">
                <div className="dataWeek">
                
                <FaCalendarAlt />
                <span>10 DE NOVEMBRO DAS 8 ÀS 14H
                </span>
                <div>
                </div>
               
                
              </div> 
              
            
              </div>
            
              <h3 className="krona-one-regular">ENCONTRO RATÉIS DA ESTRADA
 
              </h3>
              <div className="boxLocal">
                <img src="./local-icon.png" alt="" />
                <span>Local Secreto | Termina na SatsParty</span>
              </div>
             
              <p className="sc-fz-12 sora-light ">
              Participe de um passeio de moto pela região de São Paulo, com destino final na SatsParty, a festa oficial da Satsconf! Encontre outros entusiastas, aproveite o passeio e converse sobre Bitcoin enquanto toma uma bebida e ouve boa música. Venha pilotar com a gente! *Ingressos para a SatsParty não estão inclusos.

              </p>
            </div>
            <div className="boxButtonnSatsWeek">
              <BtnIngresso url="https://chat.whatsapp.com/KU5VLXfNw3bLRRzVvCyWJH"> se inscrever</BtnIngresso>
            </div>
          </div>
        </div>
           {/* NOSTR DAY*/} 
        <div className="bgEventosSatsWeek">
          <div className="boxSatsweek">
            <div className="boxImageWeek">

              <img src="./week/NOST-EVENT.jpeg" alt="" />
            </div>
            <div className="boxTitlesEventoWeek">
              <div className="boxEventDataWeek">
                <div className="dataWeek">
                
                <FaCalendarAlt />
                <span>10 DE NOVEMBRO DAS 10 ÀS 14H

                </span>
                <div>
                </div>
               
                
              </div> 
              
            
              </div>
            
              <h3 className="krona-one-regular">NOSTR DAY

 
              </h3>
              <div className="boxLocal">
                <img src="./local-icon.png" alt="" />
                <span>Casa21 | Av. Nhandu, 848</span>
              </div>
             
              <p className="sc-fz-12 sora-light ">
              Full day of beginner onboarding and technical workshops. Refreshments and snacks included!
 </p>
            </div>
            <div className="boxButtonnSatsWeek">
              <BtnIngressoBreve url="https://evento.so/p/evt_8phB8o3ZdSzpVoSQ"> EM BREVE</BtnIngressoBreve>
            </div>
          </div>
        </div>
             {/* FESTA VIP DA SATSCONF*/} 
        <div className="bgEventosSatsWeek">
          <div className="boxSatsweek">
            <div className="boxImageWeek">

              <img src="./week/satsconf-number-one.png" alt="" />
            </div>
            <div className="boxTitlesEventoWeek">
              <div className="boxEventDataWeek">
                <div className="dataWeek">
                
                <FaCalendarAlt />
                <span>10 DE NOVEMBRO DAS 12 ÀS 18H</span>
                <div>
                </div>
               
                
              </div> 
              <div className="dataWeekVip">
              <span>EXCLUSIVO</span>
              </div>
                          
              </div>
            
              <h3 className="krona-one-regular">SATSPARTY - FESTA VIP DA SATSCONF</h3>
              <div className="boxLocal">
                <img src="./local-icon.png" alt="" />
                <span>LOCAL SECRETO</span>
              </div>
             
              <p className="sc-fz-12 sora-light ">
              Uma festa exclusiva para os VIPs, com ótima comida, drinks e a chance de fazer networking com palestrantes e influenciadores da Satsconf. É a oportunidade perfeita para encerrar a SatsWeek em grande estilo, conectando-se com as principais vozes da comunidade Bitcoin em um ambiente descontraído e especial!                </p>
            </div>
           
          </div>
        </div>
        </div>
     
      </div>
    </div>
  );
};

export default SatsWeek;
