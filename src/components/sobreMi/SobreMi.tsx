import React, { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import './sobreMi.css'
import fotoPersonal from "../../assets/fotoPersonal.jpg";

const SobreMi = () => {

    const elementRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    elementRefs.current.forEach((element) => {
        if (element) {
          ScrollReveal().reveal(element, {
            // Configuración de ScrollReveal
            duration: 1000,
            delay: 200,
            distance: '20px',
            origin: 'bottom'
          });
        }
      });
    }, []);

    return (
        <div className='contenedorSobreMi' ref={(element) => { if (element) elementRefs.current.push(element); }}>
            <h1>Sobre Mi</h1>
            <div className="imagenPersonal">
                <img src={fotoPersonal} alt="" />
            </div>
            <div className="informacionSobreMi">
                <p>Actualmente estoy terminando la carrera de
                    analista informática <em>(solo me faltan 2
                    materias)</em> y me encuentro realizando una
                    pagina web de gestion para el municipio de Baradero. <br />
                    Tengo varios cursos realizados los cuales pueden encontrarlos en la sección de este portafolio. <br />
                    Mi principal objetivo es poder
                    desarrollarme en una empresa que me                 permita
                    perfeccionar mis técnicas y conocimientos
                    junto a otros profesionales.</p>
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