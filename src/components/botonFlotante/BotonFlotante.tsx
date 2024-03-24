import React from 'react';
import './BotonFlotante.css'; // Importa el archivo de estilos CSS
import GitHubIcon from '@mui/icons-material/GitHub';

const BotonFlotante: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <div className="floating-button" onClick={onClick}>
      <GitHubIcon className='BotonFlotanteGitgub'/>
    </div>
  );
};

export default BotonFlotante;