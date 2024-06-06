import React from 'react';
import "./experienciaLaboral.css";
import Box from '@mui/material/Box';
import  FotoInove  from "../../assets/Inove.png";

const Inove = () => {
    return (
        <Box className='contenedorExperienciaLaboral'>
            <div className='containerExperienciaLaboral'>
                <div className="contenedorExperiencia">
                    <div className="imagenExperiencia">
                        <img src={FotoInove} alt="" />
                    </div>
                    <div className="experienciaTextos">
                        <h1>Desarrollador FrontEnd - ReactJS</h1>
                        <h2>Programas mas importantes</h2>
                        <ul>
                            <li>Software de Gestión Municipal Baradero</li>
                            <li>Catalogo de Impresión 3D</li>
                            <li>Software de Gestión Aeroclub Lincoln</li>
                        </ul>
                    </div>
                </div>
                <h4>Desde 2023 - Hasta 2023</h4>
                <h5>Pueden ver toda la información en la seccion "Proyectos" del portafolio</h5>
            </div>
        </Box>
    );
};

export default Inove;