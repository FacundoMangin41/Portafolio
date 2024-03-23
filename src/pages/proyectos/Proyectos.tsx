import Commander3D from '../../components/proyectos/Commander3D';
import './proyectoPages.css';
import SoftwareMunicipalidad from '../../components/proyectos/SoftwareMunicipalidad';
import AeroClub from '../../components/proyectos/AeroClub';

const Proyectos = () => {
    return (
        <div className='PagesProyectos'>
            <SoftwareMunicipalidad/>
            <Commander3D/>
            <AeroClub/>
        </div>
    );
};

export default Proyectos;