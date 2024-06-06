import { Route, Routes } from "react-router-dom";
import PagePortada from "../pages/inicio/PagePortada";
import { Layout } from "../components/layout/Layout";
import Proyectos from "../pages/proyectos/Proyectos";
import SobreMi from "../pages/sobreMi/SobreMi";
import CursosRealizados from "../pages/cursosRealizados/CursosRealizados";
import Skills from "../pages/habilidades/Skills";
import Experiencia from "../pages/Laboral/Experiencia";



export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          index
          element={<PagePortada />}>
        </Route>

        <Route path="/" element={<Layout />}>

        <Route
            path="/experiencia-laboral"
            element={<Experiencia />}
          />

          <Route
            path="/proyectos"
            element={<Proyectos />}
          />

          <Route
            path="/sobre-mi"
            element={<SobreMi />}
          />

          <Route
            path="/cursos"
            element={<CursosRealizados />}
          />

          <Route
            path="/habilidades"
            element={<Skills/>}
          />

        </Route>

      </Routes>
    </>
  );
};

//<Route path="sign-in" element={<SignIn />} />