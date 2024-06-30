
import Box from '@mui/material/Box';
import softwareInversiones from "../../assets/softwareInversiones.webp";
import './proyectos.css';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';


function handleClick() {
    // Define la URL que quieres abrir en la nueva pestaña
    const url = 'https://github.com/FacundoMangin41/Inversiones';
    // Abre una nueva pestaña con la URL especificada
    window.open(url, '_blank');
}

function handleClickPagina() {
    // Define la URL que quieres abrir en la nueva pestaña
    const url = 'https://software-inversiones.netlify.app//';
    // Abre una nueva pestaña con la URL especificada
    window.open(url, '_blank');
}

const ControlInversiones = () => {


    return (

        <Box className='contenedorBoxProyecto'>
            <div className="containerProyectos">
                <div className="informacionProyecto">
                    <h1>Software para Controla Inversiones</h1>
                    <p>
                        Este software está diseñado para llevar un control detallado de las inversiones realizadas en la aplicación Rainbow.
                        Está dirigido a todo tipo de público que desee gestionar minuciosamente sus operaciones y estadísticas.
                        <br /> El software te solicitará cargar tus operaciones a través de un formulario, y cada una de ellas aparecerá en una tabla.
                        Además, cuenta con una sección donde podrás ver las estadísticas de tu rendimiento.</p>

                    <div className="botonesProyectos">
                        <button onClick={handleClick} className='BotonProyecto'><GitHubIcon /></button>
                        <button onClick={handleClickPagina} className='BotonProyecto'><RemoveRedEyeIcon /></button>
                    </div>
                </div>
                <img src={softwareInversiones} alt="" className='ImagenDerecha' />
            </div>
        </Box>
    );
};

export default ControlInversiones;