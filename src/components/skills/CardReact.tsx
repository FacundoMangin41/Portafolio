import React from 'react';
import "./skillsCss/skills.css";
import JavaScript from "../../assets/JavaScript.png";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import react from "../../assets/Cards/react.png";

const CardReact = () => {
    return (
        <div>
            <Box className='contenedorBoxSkills'>
            <div className="containerSkills">
                <img src={react} alt="" className='ImagenIzquierdaSkills'/>
                <div className="informacionSkills">
                    <h1>React JS</h1>
                    <p>React es una biblioteca de JavaScript utilizada para construir interfaces de usuario interactivas y dinámicas para aplicaciones web. </p>
                </div>
                <img src={react} alt="" className='ImagenDerechaCelularesSkills'/>
            </div>
        </Box>
        </div>
    );
};

export default CardReact;