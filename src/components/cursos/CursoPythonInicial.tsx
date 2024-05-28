import Box from '@mui/material/Box';
import React from 'react';
import carreraFrontEnd from "../../assets/Python Inicial.png";
import './cursos.css'
import Button from '@mui/material/Button';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

function handleClick() {
  // Define la URL que quieres abrir en la nueva pestaña
  const url = 'https://admin.inovecode.com/perfil/561/certificados/2/proyecto/';
  // Abre una nueva pestaña con la URL especificada
  window.open(url, '_blank');
}

const CursoPythonInicial = () => {

  return (
    <div>
    <Box className='contenedorBoxCursos'>
    <div className="containerCursos">
        <img src={carreraFrontEnd} alt="" className='ImagenIzquierda'/>
        <div className="informacionCursos">
            <h1>Python Inicial</h1>
            <p>Esta certificación se obtiene al completar las tareas asignadas en clase y al desarrollar un proyecto que en Python. 
              El proyecto consistió en realizar un el juego del Ahorcado.
            </p>
              <Button onClick={handleClick} className='BotonGithubProyectos'><RemoveRedEyeIcon/> Certificado</Button>
        </div>
        <img src={carreraFrontEnd} alt="" className='ImagenDerechaCelulares'/>
    </div>
</Box>
</div>
  )
}
export default CursoPythonInicial;