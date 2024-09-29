import Box from '@mui/material/Box';
import trading from "../../assets/trading.webp";
import './proyectos.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Swal from 'sweetalert2';

const TradingDemo = () => {
    function handleClick() {
        Swal.fire({
        icon: "error",
        title: `Demo Trading`,
        text: `No esta permitido mostrar el codigo de esta pagina web`,
        showConfirmButton: true,
        })
    }

    function handleClickPagina() {
        // Define la URL que quieres abrir en la nueva pestaña
        const url = 'https://demo-inversiones.netlify.app/';
        // Abre una nueva pestaña con la URL especificada
        window.open(url, '_blank');
    }

    return (
        <div>
            <Box className='contenedorBoxProyecto'>
                <div className="containerProyectos">
                    <img src={trading} alt="" className='ImagenIzquierda' />
                    <div className="informacionProyecto">
                        <h1>Simulador Trading</h1>
                        <p>"En el trading, la práctica es clave para alcanzar el éxito. Los principiantes pueden beneficiarse enormemente del software de simulación, que les permite familiarizarse con las dinámicas del mercado sin riesgos financieros reales. Estas plataformas ofrecen un entorno seguro para aprender a comprar y vender activos." </p>
                        <div className="botonesProyectos">
                            <button onClick={handleClick} className='BotonProyecto'><GitHubIcon /></button>
                            <button onClick={handleClickPagina} className='BotonProyecto'><RemoveRedEyeIcon /></button>
                        </div>
                    </div>
                    <img src={trading} alt="" className='ImagenDerechaCelulares' />
                </div>
            </Box>
        </div>
    );
};

export default TradingDemo;