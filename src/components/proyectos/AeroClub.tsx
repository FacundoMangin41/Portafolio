import Box from '@mui/material/Box';
import aeroclubLincoln from "../../assets/aeroclubLincoln.png";
import './proyectos.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Swal from 'sweetalert2';

function handleClick() {
    // Define la URL que quieres abrir en la nueva pestaña
    const url = 'https://github.com/FacundoMangin41/Proyecto-Aeroclub';
    // Abre una nueva pestaña con la URL especificada
    window.open(url, '_blank');
}

function handleClickPagina() {
    Swal.fire({
        icon: "error",
        title: `Software Aeroclub Lincoln`,
        text: `Este software es usado por el aeroclub Lincoln de forma local`,
        showConfirmButton: true,
    })
}

const AeroClub = () => {
    return (
        <div>
            <Box className='contenedorBoxProyecto'>
                <div className="containerProyectos">
                    <img src={aeroclubLincoln} alt="" className='ImagenIzquierda' />
                    <div className="informacionProyecto">
                        <h1>Software de Gestion Aeroclub Lincoln</h1>
                        <p>"El proyecto tiene como objetivo desarrollar un sistema de software para aeroclubes de Argentina, optimizando la gestión de actividades como la formación de pilotos, el mantenimiento de aeronaves, controles automatizados para cumplir con reglamentaciones, control de stock de insumos, administración del capital social y promoción de actividades aeronáuticas."
                        </p>
                        <div className="botonesProyectos">
                            <button onClick={handleClick} className='BotonProyecto'><GitHubIcon /></button>
                            <button onClick={handleClickPagina} className='BotonProyecto'><RemoveRedEyeIcon /></button>
                        </div>
                    </div>
                    <img src={aeroclubLincoln} alt="" className='ImagenDerechaCelulares' />
                </div>
            </Box>
        </div>
    );
};

export default AeroClub;