import React from 'react';
import './cursosRealizados.css';
import CursoHtml from '../../components/cursos/CursoHtml';
import CursoJavaScript from '../../components/cursos/CursoJavaScript';
import CursoReact from '../../components/cursos/CursoReact';
import TituloFrontEnd from '../../components/cursos/TituloFrontEnd';
import BotonCertificados from '../../components/cursos/BotonCertificados';

const CursosRealizados = () => {
    const handleClick = () => {
        // Define la URL que quieres abrir en la nueva pestaña
    const url = 'https://inove.com.ar/areapersonal/certificado/?dni=41689175';
    // Abre una nueva pestaña con la URL especificada
    window.open(url, '_blank');
    };
  
    return (
        <div className='cursosRealizados'>      
            <BotonCertificados onClick={handleClick}/> 
            <TituloFrontEnd/>
            <CursoReact/>
            <CursoJavaScript/>
            <CursoHtml/>
        </div>
    );
};

export default CursosRealizados;