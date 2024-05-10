import Link from "next/link";

//modal conteúdo -itens p. modal
const ModalPalestrantes = ({
  name,
  description,
  handleClose,
  image,
  twitter,
  linkedin,
}) => {
  return (
  
    <div className="bgModalPalestrantes" id="modal">
      <div className="modalContentPalestrantes">
        <div className="modal-body">
          <img src={image} alt={name} />
        </div>
        <div className="modal-header">
          <h2>{name}</h2>
          <button className="modal-close-btn" onClick={() => handleClose()}>
            X
          </button>
          <p>{description}</p>
          <Link href="/">
            <button className="btnComprarModal">Comprar Ingresso</button>
          </Link>

          <div className="social-icons">
            <a href={twitter}>Twitter</a>
            <a href={linkedin}>LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPalestrantes;
