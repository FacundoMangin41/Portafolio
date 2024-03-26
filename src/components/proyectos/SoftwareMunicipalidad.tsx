import Box from '@mui/material/Box';
import softwareGestion from "../../assets/softwareGestion.png";
import './proyectos.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const SoftwareMunicipalidad = () => {
    function handleClick() {
        // Define la URL que quieres abrir en la nueva pestaña
        const url = 'https://github.com/FacundoMangin41/Pagina-Personal';
        // Abre una nueva pestaña con la URL especificada
        window.open(url, '_blank');
    }

    function handleClickPagina() {
        // Define la URL que quieres abrir en la nueva pestaña
        const url = 'https://github.com/FacundoMangin41/Pagina-Personal';
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
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius ipsum voluptates, neque dignissimos libero quae, vero veniam doloremque dolorem iste ipsam, veritatis laboriosam. Magnam necessitatibus eos nam at eius doloribus?</p>
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