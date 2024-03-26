import Box from '@mui/material/Box';
import softwareGestion from "../../assets/softwareGestion.png";
import './proyectos.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Swal from 'sweetalert2';

const SoftwareMunicipalidad = () => {
    function handleClick() {
        Swal.fire({
        icon: "error",
        title: `Software Municipalidad de Baradero`,
        text: `No esta permitido mostrar el codigo de esta pagina web`,
        showConfirmButton: true,
        })
    }

    function handleClickPagina() {
        // Define la URL que quieres abrir en la nueva pestaña
        const url = 'https://munibara.netlify.app/';
        // Abre una nueva pestaña con la URL especificada
        window.open(url, '_blank');
    }

    return (
        <div>
            <Box className='contenedorBoxProyecto'>
                <div className="containerProyectos">
                    <img src={softwareGestion} alt="" className='ImagenIzquierda' />
                    <div className="informacionProyecto">
                        <h1>Software de Gestion</h1>
                        <p>El sistema propuesto tiene como finalidad mejorar la eficiencia y la efectividad en diversas áreas de trabajo, 
                            abordando aspectos fundamentales como el registro de usuarios, la gestión de inventarios de computadoras e impresoras, 
                            la administración de áreas, la generación de reportes, el seguimiento de tareas y la gestión de órdenes de trabajo, 
                            entre otros aspectos relevantes para el adecuado funcionamiento del Municipio. </p>
                        <div className="botonesProyectos">
                            <button onClick={handleClick} className='BotonProyecto'><GitHubIcon /></button>
                            <button onClick={handleClickPagina} className='BotonProyecto'><RemoveRedEyeIcon /></button>
                        </div>
                    </div>
                    <img src={softwareGestion} alt="" className='ImagenDerechaCelulares' />
                </div>
            </Box>
        </div>
    );
};

export default SoftwareMunicipalidad;