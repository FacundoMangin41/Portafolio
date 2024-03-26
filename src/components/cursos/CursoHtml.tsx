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
          <p>HTML es el lenguaje de marcado que se utiliza para definir la estructura y 
            el contenido de una página web. Consiste en una serie de elementos o etiquetas que envuelven y 
            organizan el contenido, como texto, imágenes, enlaces y otros elementos multimedia. <br />
            CSS, por otro lado, es un lenguaje de estilo que se utiliza para controlar el aspecto visual y 
            la presentación de una página web. Permite a los desarrolladores definir el color, la tipografía, 
            el diseño y otros aspectos visuales de los elementos HTML. Con CSS, los desarrolladores pueden crear diseños atractivos y 
            personalizados para sus páginas web, mejorando la experiencia del usuario y la estética general del sitio.
          </p>
          <Button onClick={handleClick} className='BotonGithubProyectos'><RemoveRedEyeIcon/> Certificado</Button>
        </div>
        <img src={html} alt="" className='ImagenDerecha' />
      </div>
    </Box>
  );
}

export default CursoHtml;