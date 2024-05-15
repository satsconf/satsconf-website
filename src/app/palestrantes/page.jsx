import BoxPalestrantes from "@/components/(landingpage)/pages/boxpalestrantes";


const Palestrantes = ({ children }) => {
  return (
      
      <div id="Palestrantes">
        {" "}
        {children}
        <div>
        
          <BoxPalestrantes />
        </div>
      </div>
  );
};

export default Palestrantes;
