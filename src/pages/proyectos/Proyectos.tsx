import React, { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import Commander3D from '../../components/proyectos/Commander3D';
import './proyectoPages.css';
import SoftwareMunicipalidad from '../../components/proyectos/SoftwareMunicipalidad';
import AeroClub from '../../components/proyectos/AeroClub';

const Proyectos = () => {

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
                <SoftwareMunicipalidad />
            </div>

            <div ref={(element) => { if (element) elementRefs.current.push(element); }}>
                <Commander3D />
            </div>

            <div ref={(element) => { if (element) elementRefs.current.push(element); }}>
                <AeroClub />
            </div>
        </div>
    );
};

export default Proyectos;