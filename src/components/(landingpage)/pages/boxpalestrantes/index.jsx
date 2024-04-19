import BoxConvidadosGlobais from "../../containers/boxconvidadosglobais";
import BoxPrincipalPalestrantes from "../../containers/boxprincipalpalestrantes";
import ImagesConvidadosDestaque from "../../containers/imagesconvidadosdestaque";

const BoxPalestrantes = () => {
  return (
    <div>
      <BoxPrincipalPalestrantes />
      <div>
        <ImagesConvidadosDestaque />
      </div>
      <div>
        <BoxConvidadosGlobais />
      </div>
    </div>
  );
};

export default BoxPalestrantes;
