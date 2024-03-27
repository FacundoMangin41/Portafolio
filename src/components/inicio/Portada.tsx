
import SendIcon from '@mui/icons-material/Send';

import './inicioComponente.css'
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import perfil from "../../assets/perfil.jpg";
import PortadaDerecha from "../../assets/PordataDerecha.png";
import { Link } from 'react-router-dom';
import archivoPDF from './../../assets/CV Facundo Mangin - Analista en Informatica 2024.pdf';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

import React, { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';

function handleClick() {
    try {
        const link = document.createElement('a');
        link.href = archivoPDF;
        link.setAttribute('download', 'CV Facundo Mangin - Analista en Informatica 2024.pdf');
        document.body.appendChild(link);
        link.click();
        link.parentNode?.removeChild(link);
    } catch (error) {
        console.error('Error al descargar el archivo PDF:', error);
    }
}

const Portada = () => {

    const letras = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (letras.current) {
        ScrollReveal().reveal(letras.current, {
          // Configuración de ScrollReveal
          duration: 2500,

        });
      }
    }, []);


    const boton = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (boton.current) {
        ScrollReveal().reveal(boton.current, {
          // Configuración de ScrollReveal
          duration: 2500,

        });
      }
    }, []);

    return (
        <Box className='contenedorInicio'>
            <div className="informacionPortada">
                <div className="imagenInicio">
                    <img src={perfil} alt="" />
                </div>
                <div className="contenedorEscritoInicio">
                    <div className="escritoUnicio" ref={letras}>
                        <h1>Facundo Mangin</h1>
                        <h3>Desarrollador FrontEnd ReactJS</h3>
                    </div>
                    <div className="botonPortada" ref={boton}>
                        <Link to="/sobre-mi" style={{ textDecoration: 'none' }} >
                            <Button endIcon={<SendIcon />} className='botonInicio'>
                                Ver Más
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="floating-button-PDF" onClick={handleClick}>
                            <PictureAsPdfIcon className='BotonFlotantePdf' />
                        </div>
            <img src={PortadaDerecha} alt="" />

        </Box>
    );
};

export default Portada;