import { Routes, Route } from "react-router-dom";
import { LoginOrRegisterRoute, ProtectedRoute } from "./route";

import Login from "./Login";
import Home from "./Home";
import { useContext } from "react";
import { AreasContext } from "../providers/Areas";
import Forgot from "./ForgotPassword";
import AreaPage from "./AreaPage";
import { CreateSessionContext } from "../providers/CreateSession";
import { api } from "../services/api";
import { useEffect } from "react";

//onlyFor={{ access: "admin", admin: true path: "/home" }}
export const AppRoutes = () => {
  const { userToken, user } = useContext(CreateSessionContext);
  const { setAreas, areas } = useContext(AreasContext);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
  };

  useEffect(() => {
    api
      .get("/areas", config)
      .then((res) => {
        setAreas(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Routes>
      <Route index element={<LoginOrRegisterRoute element={<Login />} />} />
      <Route path="home" element={<ProtectedRoute element={<Home />} />} />
      {areas?.map((area) => (
        <Route
          key={area.id}
          path={area.name}
          element={<AreaPage area={area} />}
        />
      ))}

      <Route path="forgot-password/:email/:token" element={<Forgot />} />
    </Routes>
  );
};

export default AppRoutes;

/*

      <Route path="adm" element={<Adm />} />
      <Route path="criacao" element={<Criacao />} />
      <Route path="eventos" element={<Eventos />} />
      <Route path="gp" element={<GP />} />
      <Route path="mkt" element={<Mkt />} />
*/
