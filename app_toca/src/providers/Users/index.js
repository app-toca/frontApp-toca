import { useContext, useState } from "react";
import { createContext } from "react";
import { api } from "../../services/api";
import { CreateSessionContext } from "../CreateSession";

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [allUsers, setAllUsers] = useState([]);
  const [oneUser, setOneUser] = useState("");
  const [areasUser, setAreasUser] = useState([]);

  const { userToken } = useContext(CreateSessionContext);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
  };

  const getUsers = () => {
    api
      .get("/users", config)
      .then((res) => {
        setAllUsers(res);
      })
      .catch((err) => console.log(err));
  };

  const showOneUser = (user_id) => {
    api
      .get(`/users/${user_id}`, config)
      .then((res) => {
        setOneUser(res);
      })
      .catch((err) => console.log(err));
  };

  const listAreasUser = (user_id) => {
    api
      .get(`/users/${user_id}/areas`, config)
      .then((res) => {
        setAreasUser(res);
      })
      .catch((err) => console.log(err));
  };

  const updateUser = (user_id, user) => {
    api
      .patch(`/users/${user_id}`, user, config)
      .then((res) => {})
      .catch((err) => console.log(err));
  };

  const updateUserOwner = (user_id, userIs_adm) => {
    api
      .patch(`/users/${user_id}`, userIs_adm, config)
      .then((res) => {})
      .catch((err) => console.log(err));
  };

  const deleteUser = (user_id) => {
    api
      .patch(`/users/${user_id}`, config)
      .then((res) => {})
      .catch((err) => console.log(err));
  };

  return (
    <UsersContext.Provider
      value={{
        allUsers,
        oneUser,
        areasUser,
        getUsers,
        showOneUser,
        listAreasUser,
        updateUser,
        updateUserOwner,
        deleteUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
