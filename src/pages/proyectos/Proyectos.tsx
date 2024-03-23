import React from 'react';
import Commander3D from '../../components/proyectos/Commander3D';
import './proyectoPages.css';
import SoftwareMunicipalidad from '../../components/proyectos/SoftwareMunicipalidad';

const Proyectos = () => {
    return (
        <div className='PagesProyectos'>
            <SoftwareMunicipalidad/>
            <Commander3D/>
        </div>
    );
};

export default Proyectos;