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
    const url = 'https://github.com/FacundoMangin41/Pagina-Personal';
    // Abre una nueva pestaña con la URL especificada
    window.open(url, '_blank');
}

const Commander3D = () => {
    return (

        <Box className='contenedorBoxProyecto'>
            <div className="containerProyectos">
                <div className="informacionProyecto">
                    <h1>Commander 3D</h1>
                    <p>Le damos una cordial bienvenida a nuestra plataforma de impresiones 3D, donde convergen la
                            innovación y la tecnología para ofrecer una experiencia única. Nos dirigimos a un público joven,
                            apasionado por la creatividad y el ingenio, con una página elegante, responsive, intuitiva y con
                            muchos efectos visuales. <br />
                            Podrán descubrir una variedad de proyectos emocionantes y darán vida a sus ideas más audaces a
                            través de nuestras avanzadas capacidades de impresión 3D. Le invitamos a explorar el futuro de la
                            fabricación personalizada con nosotros.</p>
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