import Box from '@mui/material/Box';
import personalpage from "../../assets/personalpage.webp";
import './proyectos.css';

const Commander3D = () => {
    return (

<Box className='contenedorBoxProyecto'>
<div className="containerProyectos">
    <div className="informacionProyecto">
        <h1>Commander 3D</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius ipsum voluptates, neque dignissimos libero quae, vero veniam doloremque dolorem iste ipsam, veritatis laboriosam. Magnam necessitatibus eos nam at eius doloribus?</p>
    </div>
    <img src={personalpage} alt="" className='ImagenDerecha'/>
</div>
</Box>
    );
};

export default Commander3D;