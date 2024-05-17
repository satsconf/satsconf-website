
import BoxPrincipalPalestrantes from "@/components/(landingpage)/pages/boxpalestrantes/boxprincipalpalestrantes";

const Palestrantes = ({ children }) => {
  return (
    <div id="Palestrantes">
      {" "}
      {children}
      <BoxPrincipalPalestrantes/>
    </div>
  );
};

export default Palestrantes;
