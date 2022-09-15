import { createContext } from "react";
import { api } from "../../services/api";
import { useState } from "react";
import { useContext } from "react";
import { CreateSessionContext } from "../CreateSession";
import { useEffect } from "react";

export const AreasContext = createContext();

export const AreasProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [areas, setAreas] = useState([]);
  const [allAreas, setAllAreas] = useState([])

  const { userToken, user } = useContext(CreateSessionContext);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
  };

  const showArea = (area_id) => {
    api
      .get(`/areas/${area_id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const getAllAreas = () => {
    api
      .get(`/areas`, config)
      .then((res) => setAllAreas(res.data))
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
      .get(`/areas/${area_id}/users`, config)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <AreasContext.Provider
      value={{
        showArea,
        updateArea,
        listUsersFromArea,
        areas,
        setAreas,
        users,
        getAllAreas,
        allAreas
      }}
    >
      {children}
    </AreasContext.Provider>
  );
};
