import { Route, Routes } from "react-router-dom";
import PagePortada from "../pages/inicio/PagePortada";
import { Layout } from "../components/layout/Layout";
import Proyectos from "../pages/proyectos/Proyectos";


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
              path="/proyectos"
              element={<Proyectos />}
            />            
        </Route>

      </Routes>
    </>
  );
};

//<Route path="sign-in" element={<SignIn />} />