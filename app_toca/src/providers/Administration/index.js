import { createContext, useContext } from "react";
import { api } from "../../services/api";
import { CreateSessionContext } from "../CreateSession";

export const AdministrationContext = createContext();

export const AdministrationProvider = ({ children }) => {
  const { userToken } = useContext(CreateSessionContext);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
  };
  const addUserToArea = (user_id, area_id) => {
    api
      .post(`/administration/area/${user_id}/${area_id}`, config)
      .then()
      .catch((err) => console.log(err));
  };

  const removerUserArea = (user_id, area_id) => {
    api
      .delete(`/administration/area/${user_id}/${area_id}`, config)
      .then()
      .catch((err) => console.log(err));
  };

  return (
    <AdministrationContext.Provider
      value={{
        addUserToArea,
        removerUserArea,
      }}
    >
      {children}
    </AdministrationContext.Provider>
  );
};
