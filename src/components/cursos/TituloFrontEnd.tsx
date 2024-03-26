import Box from '@mui/material/Box';
import React from 'react';
import carreraFrontEnd from "../../assets/carreraFrontEnd.png";
import './cursos.css'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Button from '@mui/material/Button';

function handleClick() {
    // Define la URL que quieres abrir en la nueva pestaña
    const url = 'http://23.92.69.190/perfil/561/certificados/14/Proyecto';
    // Abre una nueva pestaña con la URL especificada
    window.open(url, '_blank');
  }

const TituloFrontEnd = () => {
    return (
        <div>
            <Box className='contenedorBoxCursos'>
            <div className="containerCursos">
                <img src={carreraFrontEnd} alt="" className='ImagenIzquierda'/>
                <div className="informacionCursos">
                    <h1>Desarrollador Front End ReactJS</h1>
                    <p>ReactJS es una biblioteca de JavaScript de código abierto 
                        que se utiliza para construir interfaces de usuario interactivas y 
                        dinámicas para aplicaciones web. Desarrollado por Facebook, ReactJS 
                        se ha convertido en una herramienta fundamental en el mundo del 
                        desarrollo web debido a su eficiencia y flexibilidad.</p>
                    <Button onClick={handleClick} className='BotonGithubProyectos'><RemoveRedEyeIcon/> Certificado</Button>
                </div>
                <img src={carreraFrontEnd} alt="" className='ImagenDerechaCelulares'/>
            </div>
        </Box>
        </div>
    );
};

export default TituloFrontEnd;