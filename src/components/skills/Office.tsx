import Button from '@mui/material/Button';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Box from '@mui/material/Box';
import office from "../../assets/Cards/office.jpg";

function handleClick() {
    // Define la URL que quieres abrir en la nueva pestaña
    const url = 'https://github.com/FacundoMangin41/Pagina-Personal';
    // Abre una nueva pestaña con la URL especificada
    window.open(url, '_blank');
}


const Office = () => {

    return (
        <Box className='contenedorBoxSkills'>
            <div className="containerSkills">
                <div className="informacionSkills">
                    <h1>Office</h1>
                    <p>
                    "Productividad y gestión eficiente de datos."</p>
                </div>
                <img src={office} alt="" className='ImagenDerechaSkills' />
            </div>
        </Box>
    );
}
export default Office;