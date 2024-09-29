import React from 'react';
import "./skillsCss/skills.css";
import Boots from "../../assets/Cards/Bootstrap.jpg";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Bootstrap = () => {
    return (
        <div>
            <Box className='contenedorBoxSkills'>
            <div className="containerSkills">
                <img src={Boots} alt="" className='ImagenIzquierdaSkills'/>
                <div className="informacionSkills">
                    <h1>Bootstrap</h1>
                    <p>"Framework flexible para diseños responsivos." </p>
                </div>
                <img src={Boots} alt="" className='ImagenDerechaCelularesSkills'/>
            </div>
        </Box>
        </div>
    );
};

export default Bootstrap;