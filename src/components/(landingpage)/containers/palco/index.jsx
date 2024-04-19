import React from 'react';
import Evento from '../boxprogramacao';

const Palco = ({ stage, eventos }) => {
  return (
    <div className="palco">
      <h2>Palco {stage}</h2>
      {eventos
        .filter((evento) => evento.stage === stage) // Filter events for this stage
        .map((evento, index) => (
          <Evento key={index} evento={evento} />
        ))}
    </div>
  );
};

export default Palco;