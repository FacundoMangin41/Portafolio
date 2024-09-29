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
                    <p>"Desarrollo de aplicaciones robustas."</p>
                </div>
                <img src={java} alt="" className='ImagenDerechaCelularesSkills'/>
            </div>
        </Box>
        </div>
    );
};

export default Java;