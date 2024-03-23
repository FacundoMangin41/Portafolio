import Box from '@mui/material/Box';
import aeroclubLincoln from "../../assets/aeroclubLincoln.png";
import './proyectos.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button';

function handleClick() {
    // Define la URL que quieres abrir en la nueva pestaña
  const url = 'https://github.com/FacundoMangin41/Proyecto-Aeroclub';
  // Abre una nueva pestaña con la URL especificada
  window.open(url, '_blank');
  }

const AeroClub = () => {
    return (
        <div>
            <Box className='contenedorBoxProyecto'>
            <div className="containerProyectos">
                <img src={aeroclubLincoln} alt="" className='ImagenIzquierda'/>
                <div className="informacionProyecto">
                    <h1>Software de Gestion Aeroclub Lincoln</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius ipsum voluptates, neque dignissimos libero quae, vero veniam doloremque dolorem iste ipsam, veritatis laboriosam. Magnam necessitatibus eos nam at eius doloribus?</p>
                    <Button onClick={handleClick} className='BotonGithubProyectos'><GitHubIcon/>GitHub</Button>
                </div>
                <img src={aeroclubLincoln} alt="" className='ImagenDerechaCelulares'/>
            </div>
        </Box>
        </div>
    );
};

export default AeroClub;