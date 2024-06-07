import React, { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import './sobreMi.css'
import fotoPersonal from "../../assets/fotoPersonal.jpg";
import BotonContactame from './BotonContactame';

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
            <div className="segundoContenedorSobreMi">
                <h1 className='tituloSobreMi'>Sobre Mi</h1>
                <div className="imagenPersonal">
                    <img src={fotoPersonal} alt="" />
                </div>
                <div className="contenedorInformacionPersonal">
                    <h1>Sobre Mi</h1>
                    <div className="informacionSobreMi">
                        <p>Hola, mi nombre es Facundo Mangin, tengo 24 años, resido en Baradero, Buenos Aires, Argentina 
                            y tengo como principal objetivo trabajar y lograr independencia económica.
                            <br />Actualmente estoy terminando la carrera de
                            analista informática <em>(solo me faltan 2
                            materias)</em> y me encuentro realizando una
                            pagina web de gestion para el municipio de Baradero. <br />
                            Tengo varios cursos realizados los cuales pueden encontrarlos en la sección de este portafolio. <br />
                            Me gustaria poder desarrollarme en una empresa que permita
                            perfeccionar mis técnicas y conocimientos
                            junto a otros profesionales. <br />
                            Tambien soy un entusiasta del deporte, amante de los viajes, aficionado a los videojuegos y partidario de los encuentros familiares. </p>
                        <BotonContactame subject={''} body={''} />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SobreMi;