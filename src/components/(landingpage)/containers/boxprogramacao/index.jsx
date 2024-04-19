    import React from 'react';

    const Evento = ({ evento }) => {
        if (!evento) {
            return null;
        }
        
        return (
            <div className="evento">
                <h3>{evento.title || 'Título não disponível'}</h3>
                <p>{evento.start.toLocaleTimeString()} - {evento.end.toLocaleTimeString()}</p>
            </div>
        );
    };

    const EventoCalendario = () => {
        const events = [
            {
                id: 1,
                title: 'Nome da palestra',
                stage: 1,
                start: new Date('2024-04-19T09:00:00'),
                end: new Date('2024-04-19T10:00:00'),
            },
            
            {
                id: 2,
                title: 'Nome da palestra',
                stage: 2,
                start: new Date('2024-04-19T10:00:00'),
                end: new Date('2024-04-19T11:00:00'),
            },
            {
                id: 3,
                title: 'Nome da palestra',
                stage: 1,
                start: new Date('2024-04-19T11:00:00'),
                end: new Date('2024-04-19T12:00:00'),
            },
           
            
            
            // ... more events
        ];

        const breaks = [
            {
                start: new Date('2024-04-19T10:00:00'),
                end: new Date('2024-04-19T10:30:00'),
            },
            {
                start: new Date('2024-04-19T12:00:00'),
                end: new Date('2024-04-19T12:30:00'),
            },
            // ... more breaks
        ];

        return (
            <div className='bgContainerProgramação'>
                <div className='  containerPalcoTitle'>
                <div className='boxPalco' >
                    <h2>Palco 1</h2>


              
                </div>
                <div className='boxPalco'>
                    <h2>Palco 2</h2>
                </div>
                <div className='boxPalco'>
                    <h2>Palco 3</h2>
                </div>
                </div>

             
                <div className='gridProgramacao'>
                {events.map((evento, index) => <Evento key={index} evento={evento} />)}
                </div>
                <h2>Intervalos dd</h2>
                <div className='gridProgramacao'>

                {breaks.map((evento, index) => <Evento key={index} evento={evento} />)}
                {breaks.map((evento, index) => <Evento key={index} evento={evento} />)}
                </div>
                

                <h2>Intervalos</h2>
            
            </div>
        );
    };

    export default EventoCalendario;
