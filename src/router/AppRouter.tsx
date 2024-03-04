import { Route, Routes } from "react-router-dom";
import Inicio from "../pages/inicio/Inicio";
import { Layout } from "../components/layout/Layout";


export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Inicio />}>
                </Route>

            <Route
                path="/inicio"
                element={<Inicio />}
            />
            
        </Route>

      </Routes>
    </>
  );
};

//<Route path="sign-in" element={<SignIn />} />