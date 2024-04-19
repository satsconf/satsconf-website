import React from 'react';

const Evento = ({ evento }) => {
  return (
    <div className="evento">
      <h3>{evento.title}</h3>
      <p>{evento.start.toLocaleTimeString()} - {evento.end.toLocaleTimeString()}</p>
    </div>
  );
};

export default Evento;