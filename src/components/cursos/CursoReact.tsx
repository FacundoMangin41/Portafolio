import * as React from 'react';
import Button from '@mui/material/Button';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Box from '@mui/material/Box';
import ReactJS from "../../assets/React.png";
import './cursos.css'

function handleClick() {
  // Define la URL que quieres abrir en la nueva pestaña
  const url = 'https://admin.inovecode.com/perfil/561/certificados/18/proyecto/';
  // Abre una nueva pestaña con la URL especificada
  window.open(url, '_blank');
}


const CursoReact = () => {

  return (
    <Box className='contenedorBoxCursos'>
      <div className="containerCursos">
        <div className="informacionCursos">
          <h1>React JS</h1>
          <p>Para alcanzar esta certificación se necesitan tener conocimientos en Html / Css, JavaScript y por supuesto React. 
            También se debe cumplir con los trabajos dados y para finalizar se debe aprobar un proyecto final.</p>
          <Button onClick={handleClick} className='BotonGithubProyectos'><RemoveRedEyeIcon /> Certificado</Button>
        </div>
        <img src={ReactJS} alt="" className='ImagenDerecha' />
      </div>
    </Box>
  );
}
export default CursoReact;
