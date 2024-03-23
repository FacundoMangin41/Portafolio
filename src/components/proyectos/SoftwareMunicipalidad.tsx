import Box from '@mui/material/Box';
import React from 'react';
import softwareGestion from "../../assets/softwareGestion.png";
import './proyectos.css';

const SoftwareMunicipalidad = () => {
    return (
        <div>
            <Box className='contenedorBoxProyecto'>
            <div className="containerProyectos">
                <img src={softwareGestion} alt="" className='ImagenIzquierda'/>
                <div className="informacionProyecto">
                    <h1>Software de Gestion</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius ipsum voluptates, neque dignissimos libero quae, vero veniam doloremque dolorem iste ipsam, veritatis laboriosam. Magnam necessitatibus eos nam at eius doloribus?</p>
                </div>
                <img src={softwareGestion} alt="" className='ImagenDerechaCelulares'/>
            </div>
        </Box>
        </div>
    );
};

export default SoftwareMunicipalidad;