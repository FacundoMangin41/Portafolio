
import Button from '@mui/material/Button';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Box from '@mui/material/Box';
import ReactJS from "../../assets/React.png";
import alert from "../../assets/Cards/sweetAlert.png";

function handleClick() {
    // Define la URL que quieres abrir en la nueva pestaña
    const url = 'https://github.com/FacundoMangin41/Pagina-Personal';
    // Abre una nueva pestaña con la URL especificada
    window.open(url, '_blank');
}


const SweetAlert = () => {

    return (
        <Box className='contenedorBoxSkills'>
            <div className="containerSkills">
                <div className="informacionSkills">
                    <h1>SweetAlert</h1>
                    <p>

                        SweetAlert es una biblioteca de JavaScript que ofrece una alternativa elegante y
                        altamente personalizable a los cuadros de diálogo modales estándar del navegador. Se utiliza comúnmente para crear ventanas emergentes </p>
                </div>
                <img src={alert} alt="" className='ImagenDerechaSkills' />
            </div>
        </Box>
    );
}
export default SweetAlert;