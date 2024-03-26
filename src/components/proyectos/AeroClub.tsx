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
                        <p>El objetivo del proyecto es la creación de un sistema de software destinado a los
                            aeroclubes de la Argentina, con el propósito de optimizar la gestión de sus actividades
                            cotidianas, entre las cuales pueden mencionarse: formación de pilotos, mantenimiento
                            de las aeronaves utilizadas, controles automatizados para asegurar el cumplimiento de
                            las disposiciones y reglamentaciones vigentes, control de stock de insumos críticos,
                            administración del capital social, promoción de las actividades aeronáuticas, entre
                            otras.
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