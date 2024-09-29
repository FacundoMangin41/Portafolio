import SendIcon from '@mui/icons-material/Send';
import './inicioComponente.css';
import Button from '@mui/material/Button';
import { Box, Tooltip, TooltipProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import perfil from "../../assets/perfil.jpg";
import PortadaDerecha from "../../assets/PordataDerecha.png";
import { Link } from 'react-router-dom';
import archivoPDF from './../../assets/CV Facundo Mangin - Analista en Informatica 2024.pdf';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import cv from "../../assets/cv.jpg";

import React, { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';

import html5 from "../../assets/herramientas/html5.png";
import css from "../../assets/herramientas/css3.png";
import JavaScript from "../../assets/herramientas/javascript.png";
import typescript from "../../assets/herramientas/typescript.png";
import react from "../../assets/herramientas/react.png";
import bootstrap from "../../assets/herramientas/bootstrap.png";
import sass from "../../assets/herramientas/sass.png";
import trello from "../../assets/herramientas/trello.png";
import vscode from "../../assets/herramientas/vs-code.png";
import materialUI from "../../assets/herramientas/materialUI.png";

import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';



// ------------------------------
// Etiqueta para las skills
// ------------------------------

const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} placement="top"/>
))(({ theme }) => ({
    [`& .MuiTooltip-tooltip`]: {
        backgroundColor: '#407c7c',
        color: 'white',
        fontSize: '1rem',
        borderRadius: '4px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    [`& .MuiTooltip-arrow`]: {
        color: '#407c7c',
    },
}));




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

const Portada: React.FC = () => {
    const elementRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        elementRefs.current.forEach((element) => {
            if (element) {
                ScrollReveal().reveal(element, {
                    // Configuración de ScrollReveal
                    duration: 1000,
                    delay: 200,
                    distance: '20px',
                    origin: 'bottom',
                });
            }
        });
    }, []);

    return (
        <Box className='contenedorInicio'>
            <div className="redesSocialesPortada">
                <a href="https://www.instagram.com/facumangin/" target="_blank" rel="noopener noreferrer">
                    <InstagramIcon className='iconPortada'/>
                </a>
                <a href="https://www.linkedin.com/in/facundo-mangin-65359a268/" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon className='iconPortada'/>
                </a>
                <a href="https://api.whatsapp.com/send?phone=543329305304" target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className='iconPortada'/>
                </a>
                <a href="https://www.facebook.com/facundo.mangin/" target="_blank" rel="noopener noreferrer">
                    <FacebookIcon className='iconPortada'/>
                </a>
            </div>

            <div className="informacionPortada">
                <div className="imagenInicio" id='portadaFotoArriba' ref={(element) => { if (element) elementRefs.current.push(element); }}>
                    <img src={perfil} alt="" />
                </div>

                <div className="containerPortada">
                    <div className="contenedorEscritoInicio">
                        <div className="escritoUnicio" ref={(element) => { if (element) elementRefs.current.push(element); }}>
                            <h1>Facundo Mangin</h1>
                        </div>
                    </div>

                    <div className="contenedorEscritoInicio">
                        <div className="escritoUnicio" ref={(element) => { if (element) elementRefs.current.push(element); }}>
                            <h3>"Certificación en <span>desarrollado frontend React</span> y próximo a finalizar la carrera de
                                <span> analista en informática</span>.
                                Diseñador de interfaces interactivas y soluciones informáticas eficientes."</h3>
                        </div>

                        <div className="skillsPortada" id="skills" ref={(element) => { if (element) elementRefs.current.push(element); }}>
                            <div className="skills-box" data-skills-box>
                                
                                <div className="skill-card">
                                    <CustomTooltip title="HTML5" arrow>
                                        <div className="card-icon">
                                            <img src={html5} alt="HTML5 logo" />
                                        </div>
                                    </CustomTooltip>
                                </div>

                                <div className="skill-card">
                                    <CustomTooltip title="CSS3" arrow>
                                        <div className="card-icon">
                                            <img src={css} alt="CSS3 logo" />
                                        </div>
                                    </CustomTooltip>
                                </div>

                                <div className="skill-card">
                                    <CustomTooltip title="JavaScript" arrow>
                                        <div className="card-icon">
                                            <img src={JavaScript} alt="JavaScript logo" />
                                        </div>
                                    </CustomTooltip>
                                </div>

                                <div className="skill-card">
                                    <CustomTooltip title="TypeScript" arrow>
                                        <div className="card-icon">
                                            <img src={typescript} alt="TypeScript logo" />
                                        </div>
                                    </CustomTooltip>
                                </div>

                                <div className="skill-card">
                                    <CustomTooltip title="React" arrow>
                                        <div className="card-icon">
                                            <img src={react} alt="React logo" />
                                        </div>
                                    </CustomTooltip>
                                </div>

                                <div className="skill-card">
                                    <CustomTooltip title="Bootstrap" arrow>
                                        <div className="card-icon">
                                            <img src={bootstrap} alt="Bootstrap logo" />
                                        </div>
                                    </CustomTooltip>
                                </div>

                                <div className="skill-card">
                                    <CustomTooltip title="Material UI" arrow>
                                        <div className="card-icon">
                                            <img src={materialUI} alt="Material UI logo" />
                                        </div>
                                    </CustomTooltip>
                                </div>

                                <div className="skill-card">
                                    <CustomTooltip title="Sass" arrow>
                                        <div className="card-icon">
                                            <img src={sass} alt="Sass logo" />
                                        </div>
                                    </CustomTooltip>
                                </div>

                                <div className="skill-card">
                                    <CustomTooltip title="Trello" arrow>
                                        <div className="card-icon">
                                            <img src={trello} alt="Trello logo" />
                                        </div>
                                    </CustomTooltip>
                                </div>

                                <div className="skill-card">
                                    <CustomTooltip title="VS Code" arrow>
                                        <div className="card-icon">
                                            <img src={vscode} alt="VS Code logo" />
                                        </div>
                                    </CustomTooltip>
                                </div>
                            </div>
                        </div>

                        <div className="botonPortada" ref={(element) => { if (element) elementRefs.current.push(element); }}>
                            <Link to="/sobre-mi" style={{ textDecoration: 'none' }} >
                                <Button endIcon={<SendIcon />} className='botonInicio'>
                                    Ingresar
                                </Button>
                            </Link>
                        </div>
                    </div>



                    <div className="floating-button-PDF" onClick={handleClick}>
                        <img src={cv} alt="" />
                    </div>
                </div>
                <div className="imagenInicio" ref={(element) => { if (element) elementRefs.current.push(element); }}>
                        <img src={perfil} alt="" />
                    </div>
            </div>
        </Box>
    );
};

export default Portada;
