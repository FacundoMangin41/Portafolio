import React from 'react';
import './sobreMi.css'
import fotoPersonal from "../../assets/fotoPersonal.jpg";

const SobreMi = () => {
    return (
        <div className='contenedorSobreMi'>
            <h1>Sobre Mi</h1>
            <div className="imagenPersonal">
                <img src={fotoPersonal} alt="" />
            </div>
            <div className="informacionSobreMi">
                <p>Actualmente estoy terminando la carrera de
                    analista informática (solo me faltan 2
                    materias) y me encuentro realizando un
                    proyecto personal de una página  web de gestión. <br />
                    Tengo varios cursos realizados pueden encontrarlos en la sección de este portafolio. <br />
                    Mi principal objetivo poder
                    desarrollarme en una empresa que me
                    permita
                    perfeccionar mis técnicas y conocimientos
                    junto a otros profesionales</p>
            </div>



            {/* <div className="experienciaLaboral">
                <h1>Experiencia Laboral</h1>

                <div className="contenedoresEsperienciaLaboral">
                    <div className="Trabajos">
                        <h1>Freelance</h1>
                        <h2>Desarrollador FrontEnd de Inove</h2>
                        <p>Inicio: 2023 <br />
                            Hasta: 2024</p>
                        <h2>Desarrollo en:</h2>
                        <li>HTML / CSS</li>
                        <li>JavaScript</li>
                        <li>ReactJS</li>
                    </div>

                    <div className="Trabajos">
                        <h1>Municipalidad de Baradero</h1>
                        <h2>Soporte IT</h2>
                        <p>Inicio: 2022 <br />
                            Hasta: Actualidad
                        </p>
                        <h2>Tareas realizadas:</h2>
                        <li>Mantenimiento e instalación de equipos</li>
                        <li>Armado de PC</li>
                        <li>Instalación de Softwares</li>
                        <li>Instalación de impresoras (LAN, USB, WiFi)</li>
                        <li>Cableados de Ethernet y Fibra Óptica</li>
                        <li>Organización de cableados</li>
                        <li>Telefonía</li>

                    </div>

                </div>

            </div> */}
        </div>
    );
};

export default SobreMi;