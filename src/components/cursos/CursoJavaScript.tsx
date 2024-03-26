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
            <p>JavaScript es un lenguaje de programación de alto nivel, interpretado y orientado a objetos. 
              Es utilizado principalmente en el 
              desarrollo web para crear contenido interactivo y dinámico en las páginas web. <br />
              Además de su uso en el desarrollo web, JavaScript también se ha expandido para ser utilizado en otros entornos, 
              como el desarrollo de aplicaciones móviles (a través de frameworks como React Native o Ionic), 
              el desarrollo de aplicaciones de servidor (utilizando Node.js), 
              y el desarrollo de aplicaciones de escritorio (con herramientas como Electron).</p>
              <Button onClick={handleClick} className='BotonGithubProyectos'><RemoveRedEyeIcon/> Certificado</Button>
        </div>
        <img src={carreraFrontEnd} alt="" className='ImagenDerechaCelulares'/>
    </div>
</Box>
</div>
  )
}
export default CursoJavaScript;