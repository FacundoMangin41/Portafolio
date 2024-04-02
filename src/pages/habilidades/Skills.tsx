import { useEffect, useRef } from 'react';
import CardReact from '../../components/skills/CardReact';
import "./skills.css";
import ScrollReveal from 'scrollreveal';
import CardJavaScript from '../../components/skills/CardJavaScript';
import HtmlCss from '../../components/skills/HtmlCss';
import MaterialUi from '../../components/skills/MaterialUi';
import Bootstrap from '../../components/skills/Bootstrap';
import SweetAlert from '../../components/skills/SweetAlert';
import Figma from '../../components/skills/Figma';
import Canva from '../../components/skills/Canva';
import Office from '../../components/skills/Office';
import Java from '../../components/skills/Java';

const Skills = () => {

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
        
        <div className='skills'>
            <div ref={(element) => { if (element) elementRefs.current.push(element); }}>
                <Office/>
            </div>          
            <div ref={(element) => { if (element) elementRefs.current.push(element); }}>
                <Figma/>
            </div>
            <div ref={(element) => { if (element) elementRefs.current.push(element); }}>
                <Canva/>
            </div>
            <div ref={(element) => { if (element) elementRefs.current.push(element); }}>
                <CardReact />
            </div>
            <div ref={(element) => { if (element) elementRefs.current.push(element); }}>
                <CardJavaScript/>
            </div>
            <div ref={(element) => { if (element) elementRefs.current.push(element); }}>
                <HtmlCss/>
            </div>
            <div ref={(element) => { if (element) elementRefs.current.push(element); }}>
                <MaterialUi/>
            </div>
            <div ref={(element) => { if (element) elementRefs.current.push(element); }}>
                <Bootstrap/>
            </div>
            <div ref={(element) => { if (element) elementRefs.current.push(element); }}>
                <SweetAlert/>
            </div>
            <div ref={(element) => { if (element) elementRefs.current.push(element); }}>
                <Java/>
            </div>
        </div>
    );
};

export default Skills;