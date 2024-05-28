import React, { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import './cursosRealizados.css';
import CursoHtml from '../../components/cursos/CursoHtml';
import CursoJavaScript from '../../components/cursos/CursoJavaScript';
import CursoReact from '../../components/cursos/CursoReact';
import TituloFrontEnd from '../../components/cursos/TituloFrontEnd';
import BotonCertificados from '../../components/cursos/BotonCertificados';
import CursoPythonInicial from '../../components/cursos/CursoPythonInicial';

const CursosRealizados = () => {
   
    const handleClick = () => {
        // Define la URL que quieres abrir en la nueva pestaña
    const url = 'https://inove.com.ar/areapersonal/certificado/?dni=41689175';
    // Abre una nueva pestaña con la URL especificada
    window.open(url, '_blank');
    };
  

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
        <div className='cursosRealizados'>      
            
            <div ref={(element) => { if (element) elementRefs.current.push(element); }}>
            <TituloFrontEnd/>
            </div>

            <div ref={(element) => { if (element) elementRefs.current.push(element); }}>
            <CursoReact/>
            </div>

            <div ref={(element) => { if (element) elementRefs.current.push(element); }}>
            <CursoJavaScript/>
            </div>

            <div ref={(element) => { if (element) elementRefs.current.push(element); }}>

            <CursoHtml/>
            </div>

            <div ref={(element) => { if (element) elementRefs.current.push(element); }}>

            <CursoPythonInicial/>
            </div>
            
            {/* <BotonCertificados onClick={handleClick}/>  */}
            
            
        </div>
    );
};

export default CursosRealizados;