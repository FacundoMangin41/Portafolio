
import SendIcon from '@mui/icons-material/Send';

import './inicioComponente.css'
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import perfil from "../../assets/perfil.jpg";
import PortadaDerecha from "../../assets/PordataDerecha.png";
import { Link } from 'react-router-dom';
import archivoPDF from './../../assets/CV Facundo Mangin - Analista en Informatica 2024.pdf';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import cv from "../../assets/cv.jpg";

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
        <Box className='contenedorInicio'>
            <div className="informacionPortada">
                <div className="contenedorEscritoInicio">
                    <div className="escritoUnicio" ref={(element) => { if (element) elementRefs.current.push(element); }}>
                        <h1>Facundo Mangin</h1>
                    </div>
                </div>

                <div className="imagenInicio" ref={(element) => { if (element) elementRefs.current.push(element); }}>
                    <img src={perfil} alt="" />
                </div>
                <div className="contenedorEscritoInicio">
                    <div className="escritoUnicio" ref={(element) => { if (element) elementRefs.current.push(element); }}>
                        <h3>Analista en Informática</h3>
                        <h3>Desarrollador FrontEnd React</h3>
                    </div>
                    <div className="botonPortada" ref={(element) => { if (element) elementRefs.current.push(element); }}>
                        <Link to="/sobre-mi" style={{ textDecoration: 'none' }} >
                            <Button endIcon={<SendIcon />} className='botonInicio'>
                                Ver Más
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="floating-button-PDF" onClick={handleClick}>
                            <img src={cv} alt="" />
                        </div>
            <img src={PortadaDerecha} alt="" />

        </Box>
    );
};

export default Portada;