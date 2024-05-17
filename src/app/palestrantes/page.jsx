import BoxPalestrantes from "@/components/(landingpage)/pages/boxpalestrantes";

const Palestrantes = ({ children }) => {
  return (
    <div id="Palestrantes">
      {" "}
      {children}
      <BoxPalestrantes />
    </div>
  );
};

export default Palestrantes;
