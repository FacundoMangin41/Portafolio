import Button from '@mui/material/Button';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Box from '@mui/material/Box';
import canva from "../../assets/Cards/canva.webp";

function handleClick() {
    // Define la URL que quieres abrir en la nueva pestaña
    const url = 'https://github.com/FacundoMangin41/Pagina-Personal';
    // Abre una nueva pestaña con la URL especificada
    window.open(url, '_blank');
}


const Canva = () => {

    return (
        <Box className='contenedorBoxSkills'>
            <div className="containerSkills">
                <div className="informacionSkills">
                    <h1>Canva</h1>
                    <p>
                    Creación visual rápida y efectiva.</p>
                </div>
                <img src={canva} alt="" className='ImagenDerechaSkills' />
            </div>
        </Box>
    );
}
export default Canva;