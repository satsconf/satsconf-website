
const ImagesConvidadosDestaque = () => {
    return (
      <div className="bgContainerConvidadosDestaque">
         <div className="ContainerImagemConvidadosDestaque">
        {/* imagem um */}
        <div className="containerConvidadosDestaque ">
        <img src="/palestrante-destaque-satsconf.jpg" alt="" className="imageConvidados" />
        <div className="containerImagesBoxDestaque">
        <h3>Em breve!</h3>
            <span>...</span>
        </div>
      </div>
       {/* imagem dois */}
       <div className="containerConvidadosDestaque">
        <img src="/palestrantes-sats-conf-destaque-dia.jpg" alt="" className="imageConvidados" />
        <div className="containerImagesBoxDestaque">
        <h3>Em breve!</h3>
            <span>...</span>
        </div>
      </div>
       {/* imagem tres */}
       <div className="containerConvidadosDestaque">
        <img src="/satsconf-convidado-destaque-ano.jpg" alt="" className="imageConvidados" />
        <div className="containerImagesBoxDestaque">
            <h3>Em breve!</h3>
            <span>...</span>
        </div>
      </div>  
   
      </div>
    
      </div>
     
      
    );
  };
  
  export default ImagesConvidadosDestaque;
  