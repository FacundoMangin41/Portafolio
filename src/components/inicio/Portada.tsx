
import SendIcon from '@mui/icons-material/Send';

import './inicioComponente.css'
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import perfil from "../../assets/perfil.jpg";
import PortadaDerecha from "../../assets/PordataDerecha.png";
import { Link } from 'react-router-dom';


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
                        <Link to="/proyectos" style={{ textDecoration: 'none' }}>
                            <Button endIcon={<SendIcon />} className='botonInicio'>
                                Ver Más
                            </Button>
                        </Link>
                    </div>

                </div>
            </div>
            <img src={PortadaDerecha} alt="" />

        </Box>
    );
};

export default Portada;