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
                    <p>Se logra alcanzar este hito a través de la culminación de un proyecto final, que implica la creación de una página web. 
                        Esta tarea mezcla todos los conocimientos adquiridos a lo largo del año, mientras se cumplen con los criterios establecidos 
                        por el profesor. Es un ejercicio que fusiona habilidad, creatividad y 
                        dedicación para dar vida a una plataforma digital que refleje el dominio adquirido en el campo de la tecnología y el diseño web.</p>
                    <Button onClick={handleClick} className='BotonGithubProyectos'><RemoveRedEyeIcon/> Certificado</Button>
                </div>
                <img src={carreraFrontEnd} alt="" className='ImagenDerechaCelulares'/>
            </div>
        </Box>
        </div>
    );
};

export default TituloFrontEnd;