import { Routes, Route } from "react-router-dom";
import { LoginOrRegisterRoute, ProtectedRoute } from "./route";

import Login from "./Login";
import Adm from "./Administracao";
import Criacao from "./Criacao";
import Eventos from "./Eventos";
import GP from "./GP";
import Home from "./Home";
import Mkt from "./Marketing";
import Register from "./Register";
import Forgot from "./ForgotPassword";
//onlyFor={{ access: "admin", admin: true path: "/home" }}
export const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<LoginOrRegisterRoute element={<Login />}/>} />
      <Route path="register" element={<Register />} />
      <Route path="home" element={<ProtectedRoute element={<Home />}/>} />
      <Route path="adm" element={<Adm />} />
      <Route path="criacao" element={<Criacao />} />
      <Route path="eventos" element={<Eventos />} />
      <Route path="gp" element={<GP />} />
      <Route path="mkt" element={<Mkt />} />
      <Route path="forgot-password/:email/:token" element={<Forgot />} />
    </Routes>
  );
};

export default AppRoutes;
