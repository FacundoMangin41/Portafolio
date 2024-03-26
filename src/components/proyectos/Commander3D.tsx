import Box from '@mui/material/Box';
import personalpage from "../../assets/personalpage.webp";
import './proyectos.css';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';


function handleClick() {
    // Define la URL que quieres abrir en la nueva pestaña
    const url = 'https://github.com/FacundoMangin41/Pagina-Personal';
    // Abre una nueva pestaña con la URL especificada
    window.open(url, '_blank');
}

function handleClickPagina() {
    // Define la URL que quieres abrir en la nueva pestaña
    const url = 'https://commander3d.netlify.app/';
    // Abre una nueva pestaña con la URL especificada
    window.open(url, '_blank');
}

const Commander3D = () => {
    return (

        <Box className='contenedorBoxProyecto'>
            <div className="containerProyectos">
                <div className="informacionProyecto">
                    <h1>Commander 3D</h1>
                    <p>
                        Commander 3D fue creado con el propósito de exhibir los trabajos realizados en impresión 3D,
                        dirigido a un público joven apasionado por la creatividad y el ingenio. <br />
                        Todos los detalles de esta página se pueden encontrar en el repositorio de GitHub.</p>
                        
                    <div className="botonesProyectos">
                        <button onClick={handleClick} className='BotonProyecto'><GitHubIcon /></button>
                        <button onClick={handleClickPagina} className='BotonProyecto'><RemoveRedEyeIcon /></button>
                    </div>
                </div>
                <img src={personalpage} alt="" className='ImagenDerecha' />
            </div>
        </Box>
    );
};

export default Commander3D;