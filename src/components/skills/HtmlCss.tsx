import React from 'react';
import "./skillsCss/skills.css";
import html5 from "../../assets/Cards/html5-css31.png";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const HtmlCss = () => {
    return (
        <div>
            <Box className='contenedorBoxSkills'>
            <div className="containerSkills">
                <img src={html5} alt="" className='ImagenIzquierdaSkills'/>
                <div className="informacionSkills">
                    <h1>Html / Css</h1>
                    <p>HTML (HyperText Markup Language):  "Estructura semántica para la web."
                        <br /> CSS (Cascading Style Sheets): "Estilos modernos y responsivos." </p>
                </div>
                <img src={html5} alt="" className='ImagenDerechaCelularesSkills'/>
            </div>
        </Box>
        </div>
    );
};

export default HtmlCss;