import React from 'react';
import "./experienciaLaboral.css";
import Box from '@mui/material/Box';
import  FotoMunicipalidad  from "../../assets/municipalidadBaradero.jpg";

const MunicipalidadBaradero = () => {
    return (
        <Box className='contenedorExperienciaLaboral'>
            <div className='containerExperienciaLaboral'>
                <div className="contenedorExperiencia">
                    <div className="imagenExperiencia">
                        <img src={FotoMunicipalidad} alt="" />
                    </div>
                    <div className="experienciaTextos">
                        <h1>Municipalidad de baradero</h1>
                        <h2>Soporte IT</h2>
                        <h3>Tareas Realizadas</h3>
                        <div className="experienciaListas">
                            <ul>
                                <li>Mantenimiento e instalacion de Equipos</li>
                                <li>Armado de PC</li>
                                <li>Instalación de Softwares</li>
                                <li>Instalación de impresoras (LAN, USB, WiFi)</li>
                                <li>Cableados de Ethernet y Fibra Óptica</li>
                                <li>Organización de cableados</li>
                                <li>Telefonía</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <h4>Desde 2022 - Hasta 2024</h4>
            </div>
        </Box>
    );
};

export default MunicipalidadBaradero;