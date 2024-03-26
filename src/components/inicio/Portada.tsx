
import SendIcon from '@mui/icons-material/Send';

import './inicioComponente.css'
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import perfil from "../../assets/perfil.jpg";
import PortadaDerecha from "../../assets/PordataDerecha.png";
import { Link } from 'react-router-dom';
import archivoPDF from './../../assets/CVFacundoMangin.pdf';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

function handleClick() {
    try {
        const link = document.createElement('a');
        link.href = archivoPDF;
        link.setAttribute('download', 'CVFacundoMangin.pdf');
        document.body.appendChild(link);
        link.click();
        link.parentNode?.removeChild(link);
    } catch (error) {
        console.error('Error al descargar el archivo PDF:', error);
    }
}

const Portada = () => {
    return (
        <Box className='contenedorInicio'>
            <div className="informacionPortada">
                <div className="imagenInicio">
                    <img src={perfil} alt="" />
                </div>
                <div className="contenedorEscritoInicio">
                    <div className="escritoUnicio">
                        <h1>Facundo Mangin</h1>
                        <h3>Desarrollador FrontEnd ReactJS</h3>
                    </div>
                    <div className="botonPortada">
                        <Link to="/sobre-mi" style={{ textDecoration: 'none' }}>
                            <Button endIcon={<SendIcon />} className='botonInicio'>
                                Ver Más
                            </Button>
                        </Link>

                        <div className="floating-button-PDF" onClick={handleClick}>
                            <PictureAsPdfIcon className='BotonFlotantePdf' />
                        </div>
                    </div>

                </div>
            </div>
            <img src={PortadaDerecha} alt="" />

        </Box>
    );
};

export default Portada;