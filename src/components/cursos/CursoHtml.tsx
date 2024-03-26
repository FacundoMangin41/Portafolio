import * as React from 'react';
import Button from '@mui/material/Button';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Box from '@mui/material/Box';
import html from "../../assets/html.png";
import './cursos.css'

function handleClick() {
  // Define la URL que quieres abrir en la nueva pestaña
  const url = 'http://23.92.69.190/perfil/561/certificados/14/Proyecto';
  // Abre una nueva pestaña con la URL especificada
  window.open(url, '_blank');
}


const CursoHtml = () => {

  return (
    <Box className='contenedorBoxCursos'>
      <div className="containerCursos">
        <div className="informacionCursos">
          <h1>HTML / CSS</h1>
          <p>Esta es la certificación inicial y más básica, que requiere completar la entrega de todos los trabajos asignados por los profesores y realizar un proyecto final. 
            Este proyecto consistió en crear un portafolio personal adaptable a cualquier dispositivo móvil.
          </p>
          <Button onClick={handleClick} className='BotonGithubProyectos'><RemoveRedEyeIcon/> Certificado</Button>
        </div>
        <img src={html} alt="" className='ImagenDerecha' />
      </div>
    </Box>
  );
}

export default CursoHtml;