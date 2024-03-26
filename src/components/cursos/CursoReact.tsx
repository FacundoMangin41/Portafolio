import * as React from 'react';
import Button from '@mui/material/Button';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Box from '@mui/material/Box';
import ReactJS from "../../assets/React.png";
import './cursos.css'

function handleClick() {
  // Define la URL que quieres abrir en la nueva pestaña
  const url = 'https://github.com/FacundoMangin41/Pagina-Personal';
  // Abre una nueva pestaña con la URL especificada
  window.open(url, '_blank');
}


const CursoReact = () => {

  return (
<Box className='contenedorBoxCursos'>
      <div className="containerCursos">
        <div className="informacionCursos">
          <h1>React JS</h1>
          <p>ReactJS es una biblioteca de JavaScript de código abierto 
                        que se utiliza para construir interfaces de usuario interactivas y 
                        dinámicas para aplicaciones web. Desarrollado por Facebook, ReactJS 
                        se ha convertido en una herramienta fundamental en el mundo del 
                        desarrollo web debido a su eficiencia y flexibilidad.</p>
                        <Button onClick={handleClick} className='BotonGithubProyectos'><RemoveRedEyeIcon/> Certificado</Button>
        </div>
        <img src={ReactJS} alt="" className='ImagenDerecha' />
      </div>
    </Box>
  );
}
export default CursoReact;
