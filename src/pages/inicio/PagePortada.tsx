import BotonFlotante from '../../components/botonFlotante/BotonFlotante';
import Portada from '../../components/inicio/Portada';

const PagePortada = () => {
    const handleClick = () => {
        // Define la URL que quieres abrir en la nueva pestaña
    const url = 'https://github.com/FacundoMangin41';
    // Abre una nueva pestaña con la URL especificada
    window.open(url, '_blank');
    };



    return (
        <div>
            <Portada/>
            <BotonFlotante onClick={handleClick} />
        </div>
    );
};

export default PagePortada;