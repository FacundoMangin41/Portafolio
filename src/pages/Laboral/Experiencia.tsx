import React, { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import MunicipalidadBaradero from '../../components/experienciaLaboral/MunicipalidadBaradero';
import "./experiencia.css"
import Inove from '../../components/experienciaLaboral/Inove';
import Granix from '../../components/experienciaLaboral/Granix';

const Experiencia = () => {

    const elementRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        elementRefs.current.forEach((element) => {
            if (element) {
                ScrollReveal().reveal(element, {
                    // Configuración de ScrollReveal
                    duration: 1000,
                    delay: 200,
                    distance: '20px',
                    origin: 'bottom'
                });
            }
        });
    }, []);

    return (
        <div className='PagesProyectos'>

            <div ref={(element) => { if (element) elementRefs.current.push(element); }}>
                <Granix />
            </div>

            <div ref={(element) => { if (element) elementRefs.current.push(element); }}>
                <Inove />
            </div>

            <div ref={(element) => { if (element) elementRefs.current.push(element); }}>
                <MunicipalidadBaradero />
            </div>
        </div>
    );
};

export default Experiencia;