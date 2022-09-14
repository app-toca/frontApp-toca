import { createContext } from "react";
import { api } from "../../services/api";

export const AreasContext = createContext();

export const AreasProvider = ({ children }) => {
  const showArea = (area_id) => {
    api
      .get(`/areas/${area_id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const updateArea = (area_id) => {
    api
      .patch(`/areas/${area_id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const listUsersFromArea = (area_id) => {
    api
      .get(`/areas/${area_id}/users`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
  };

  return (
    <AreasContext.Provider value={{ showArea, updateArea, listUsersFromArea }}>
      {children}
    </AreasContext.Provider>
  );
};
