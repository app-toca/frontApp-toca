import { useState } from "react";
import { createContext } from "react";

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const getUsers = () => {};

  const showUser = () => {};

  const listAreasUser = () => {};

  const updateUser = () => {};

  const updateUserOwner = () => {};

  const deleteUser = () => {};
};
