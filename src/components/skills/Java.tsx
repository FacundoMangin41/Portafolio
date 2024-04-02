import React from 'react';
import "./skillsCss/skills.css";
import java from "../../assets/Cards/java.png";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Java = () => {
    return (
        <div>
            <Box className='contenedorBoxSkills'>
            <div className="containerSkills">
                <img src={java} alt="" className='ImagenIzquierdaSkills'/>
                <div className="informacionSkills">
                    <h1>Java</h1>
                    <p>Es un lenguaje de programación de propósito general, orientado a objetos y diseñado para ser portátil, 
                        lo que significa que el código escrito en Java puede ejecutarse en cualquier 
                        plataforma que tenga un intérprete Java instalado, sin necesidad de realizar modificaciones adicionales. </p>
                </div>
                <img src={java} alt="" className='ImagenDerechaCelularesSkills'/>
            </div>
        </Box>
        </div>
    );
};

export default Java;