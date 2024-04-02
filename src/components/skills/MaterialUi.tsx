
import Button from '@mui/material/Button';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Box from '@mui/material/Box';
import ReactJS from "../../assets/React.png";
import materialUI from "../../assets/Cards/materialUI.png";

function handleClick() {
    // Define la URL que quieres abrir en la nueva pestaña
    const url = 'https://github.com/FacundoMangin41/Pagina-Personal';
    // Abre una nueva pestaña con la URL especificada
    window.open(url, '_blank');
}


const MaterialUi = () => {

    return (
        <Box className='contenedorBoxSkills'>
            <div className="containerSkills">
                <div className="informacionSkills">
                    <h1>Material UI</h1>
                    <p>
                    Material-UI proporciona una amplia gama de componentes reutilizables y estilizados. <br />
                    La biblioteca no solo ofrece una estética agradable, sino que también prioriza la accesibilidad y la usabilidad. </p>
                </div>
                <img src={materialUI} alt="" className='ImagenDerechaSkills' />
            </div>
        </Box>
    );
}
export default MaterialUi;