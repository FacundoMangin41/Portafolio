
import Button from '@mui/material/Button';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Box from '@mui/material/Box';
import ReactJS from "../../assets/React.png";
import javaScriptTypeScript from "../../assets/Cards/javaScriptTypeScript.png";

function handleClick() {
    // Define la URL que quieres abrir en la nueva pestaña
    const url = 'https://github.com/FacundoMangin41/Pagina-Personal';
    // Abre una nueva pestaña con la URL especificada
    window.open(url, '_blank');
}


const JavaScriptTypeScript = () => {

    return (
        <Box className='contenedorBoxSkills'>
            <div className="containerSkills">
                <div className="informacionSkills">
                    <h1>JavaScript / TypeScript</h1>
                    <p>
                        JavaScript: "Programación para experiencias web interactivas."
                        <br /> TypeScript: "Código más robusto y mantenible."</p>
                </div>
                <img src={javaScriptTypeScript} alt="" className='ImagenDerechaSkills' />
            </div>
        </Box>
    );
}
export default JavaScriptTypeScript;