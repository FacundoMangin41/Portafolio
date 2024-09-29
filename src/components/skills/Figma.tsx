import React from 'react';
import "./skillsCss/skills.css";
import figma from "../../assets/Cards/figma.png";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Figma = () => {
    return (
        <div>
            <Box className='contenedorBoxSkills'>
            <div className="containerSkills">
                <img src={figma} alt="" className='ImagenIzquierdaSkills'/>
                <div className="informacionSkills">
                    <h1>Figma</h1>
                    <p>"Diseño de interfaces y prototipos interactivos." </p>
                </div>
                <img src={figma} alt="" className='ImagenDerechaCelularesSkills'/>
            </div>
        </Box>
        </div>
    );
};

export default Figma;