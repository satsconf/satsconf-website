import React from 'react';

const Mapa = () => {
    return (
        <div className="map-container">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.1143909242282!2d-46.672250624670795!3d-23.52838777882251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57ff35bf5e2d%3A0xb586002bfbea837!2sAudio!5e0!3m2!1spt-BR!2sbr!4v1720709357778!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{border: 0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Mapa"
            ></iframe>
        </div>
    );
};

export default Mapa;
