import Box from '@mui/material/Box';
import React from 'react';
import carreraFrontEnd from "../../assets/JavaScript.png";
import './cursos.css'
import Button from '@mui/material/Button';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

function handleClick() {
  // Define la URL que quieres abrir en la nueva pestaña
  const url = 'http://23.92.69.190/perfil/561/certificados/16/Proyecto';
  // Abre una nueva pestaña con la URL especificada
  window.open(url, '_blank');
}

const CursoJavaScript = () => {

  return (
    <div>
    <Box className='contenedorBoxCursos'>
    <div className="containerCursos">
        <img src={carreraFrontEnd} alt="" className='ImagenIzquierda'/>
        <div className="informacionCursos">
            <h1>JavaScript</h1>
            <p>Esta certificación se obtiene al completar las tareas asignadas en clase y al desarrollar un proyecto que incluya código JavaScript. 
              El proyecto consistió en crear una página web proporcionada por los profesores o elegir diseñar y crear una página propia siguiendo ciertas pautas.
            </p>
              <Button onClick={handleClick} className='BotonGithubProyectos'><RemoveRedEyeIcon/> Certificado</Button>
        </div>
        <img src={carreraFrontEnd} alt="" className='ImagenDerechaCelulares'/>
    </div>
</Box>
</div>
  )
}
export default CursoJavaScript;