
import Button from '@mui/material/Button';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Box from '@mui/material/Box';
import ReactJS from "../../assets/React.png";
import javaScript from "../../assets/Cards/javaScript.png";

function handleClick() {
    // Define la URL que quieres abrir en la nueva pestaña
    const url = 'https://github.com/FacundoMangin41/Pagina-Personal';
    // Abre una nueva pestaña con la URL especificada
    window.open(url, '_blank');
}


const CardJavaScript = () => {

    return (
        <Box className='contenedorBoxSkills'>
            <div className="containerSkills">
                <div className="informacionSkills">
                    <h1>JavaScript</h1>
                    <p>
                        JavaScript es un lenguaje de programación de alto nivel, interpretado y
                        multiplataforma. Se utiliza principalmente para crear aplicaciones web interactivas y dinámicas.</p>
                </div>
                <img src={javaScript} alt="" className='ImagenDerechaSkills' />
            </div>
        </Box>
    );
}
export default CardJavaScript;