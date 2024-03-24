import { Outlet } from "react-router-dom";
import  Header  from "../header/Header";
import  Footer  from "../footer/Footer";
import BotonFlotante from "../botonFlotante/BotonFlotante";


function Layout() {
  //el componente Outlet, significa que ahi van a ir todos los
  //componentes que esten dentro de la rutas en la AppRouter
  //el layout se utiliza cuando se repite mucho, ej: header nav footer, etc

  const handleClick = () => {
      // Define la URL que quieres abrir en la nueva pestaña
  const url = 'https://github.com/FacundoMangin41';
  // Abre una nueva pestaña con la URL especificada
  window.open(url, '_blank');
  };


  return (
    <div className="container-layout">
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
        <BotonFlotante onClick={handleClick} />
    </div>
  );
}

export { Layout };