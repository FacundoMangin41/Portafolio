import React from 'react';
import "./experienciaLaboral.css";
import Box from '@mui/material/Box';
import  granix  from "../../assets/granix.png";

const Granix = () => {
    return (
        <Box className='contenedorExperienciaLaboral'>
            <div className='containerExperienciaLaboral'>
                <h1>Alimentos Granix</h1>
                <div className="contenedorExperiencia">
                    <div className="imagenExperiencia">
                        <img src={granix} alt="" />
                    </div>
                    <div className="experienciaTextos">
                        <h1>Alimentos Granix</h1>
                        <h2>Produccion</h2>
                        <div className="experienciaListas">
                            <div>
                                <li>Empaquetado</li>
                            </div>
                        </div>
                    </div>
                </div>
                <h4>Desde 2024 - Actualmente</h4>
            </div>
        </Box>
    );
};

export default Granix;