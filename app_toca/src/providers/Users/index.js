import { useContext, useState } from "react";
import { createContext } from "react";
import { api } from "../../services/api";
import { CreateSessionContext } from "../CreateSession";

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [allUsers, setAllUsers] = useState([]);
  const [oneUser, setOneUser] = useState("");
  const [areasUser, setAreasUser] = useState([]);

  const { userToken, user } = useContext(CreateSessionContext);

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
        setAllUsers(res.data);
      })
      .catch((err) => console.log(err));
  };

  const showOneUser = (user_id) => {
    api
      .get(`/users/${user_id}`, config)
      .then((res) => {
        setOneUser(res.data);
      })
      .catch((err) => console.log(err));
  };

  const listAreasUser = () => {
    api
      .get(`/users/${user.id}/areas`, config)
      .then((res) => {
        setAreasUser(res.data);
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
        listAreasUser,
        getUsers,
        showOneUser,
        updateUser,
        updateUserOwner,
        deleteUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
