import { Outlet } from "react-router-dom";
import  Header  from "../header/Header";
import BotonFlotante from "../botonFlotante/BotonFlotante";

import archivoPDF from './../../assets/CV Facundo Mangin - Analista en Informatica 2024.pdf';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import cv from "../../assets/cv.jpg";


function Layout() {
  //el componente Outlet, significa que ahi van a ir todos los
  //componentes que esten dentro de la rutas en la AppRouter
  //el layout se utiliza cuando se repite mucho, ej: header nav footer, etc

  // const handleClick = () => {
  //     // Define la URL que quieres abrir en la nueva pestaña
  // const url = 'https://github.com/FacundoMangin41';
  // // Abre una nueva pestaña con la URL especificada
  // window.open(url, '_blank');
  // };

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


  return (
    <div className="container-layout">
        <Header></Header>
        <Outlet></Outlet>
        <div className="floating-button-PDF" onClick={handleClick}>
          <img src={cv} alt="" />
        </div>
    </div>
  );
}

export { Layout };