import Button from '@mui/material/Button';
import React from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';


function handleClick() {
    // Define la URL que quieres abrir en la nueva pestaña
    const url = 'http://23.92.69.190/perfil/561/certificados/14/Proyecto';
    // Abre una nueva pestaña con la URL especificada
    window.open(url, '_blank');
  }
const BotonCertificados: React.FC<{ onClick: () => void }> = ({ onClick }) => {
    return (
        <div className="floating-button-certificado" onClick={onClick}>
      <RemoveRedEyeIcon className='BotonFlotanteCertificado'/>
    </div>
    );
};

export default BotonCertificados;



