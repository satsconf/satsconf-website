import BoxPalestrantes from "@/components/(landingpage)/pages/boxpalestrantes";

import React from "react";

const Palestrantes = ({ children }) => {
  return (
    <div>
      {/* Aqui é onde você renderiza children */}
      <div id="Palestrantes">
        {" "}
        {children}
        <div>
          <BoxPalestrantes />
        </div>
      </div>
    </div>
  );
};

export default Palestrantes;
