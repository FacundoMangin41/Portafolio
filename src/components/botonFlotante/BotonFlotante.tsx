import React from 'react';
import './BotonFlotante.css'; // Importa el archivo de estilos CSS
import GitHubIcon from '@mui/icons-material/GitHub';

import archivoPDF from './../../assets/CV Facundo Mangin - Analista en Informatica 2024.pdf';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import cv from "../../assets/cv.jpg";

const BotonFlotante: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <div className="floating-button-pdf" onClick={onClick}>
    </div>
  );
};

export default BotonFlotante;