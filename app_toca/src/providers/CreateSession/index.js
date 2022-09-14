import { useState } from "react";
import { createContext } from "react";
import { api } from "../../services/api";

export const CreateSessionContext = createContext();

export const CreateSessionProvider = ({ children }) => {
  const [userToken, setToken] = useState(
    JSON.parse(localStorage.getItem("@userTocaToken")) || ""
  );
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("@userToca")) || ""
  );

  const registerUser = (user, org_id, pass_org) => {
    api
      .post(`/users/${org_id}/${pass_org}`, user)
      .then((res) => {
        const { email, password } = user;
        loginUser({ email, password });
      })
      .catch((err) => console.log(err));
  };

  const loginUser = (user) => {
    api
      .post(`/login`, user)
      .then((res) => {
        setToken(res.token);
        setUser(res.user);

        localStorage.setItem("@userTocaToken", JSON.stringify(res.token));
        localStorage.setItem("@userToca", JSON.stringify(res.user));
      })
      .catch((err) => {
        setToken("");
        setUser("");

        localStorage.removeItem("@userTocaToken");
        localStorage.removeItem("@userToca");
      });
  };

  const exitUser = () => {
    setToken("");
    setUser("");
    localStorage.removeItem("@userTocaToken");
    localStorage.removeItem("@userToca");
  };

  return (
    <CreateSessionContext.Provider
      value={{
        userToken,
        user,
        registerUser,
        loginUser,
        exitUser,
      }}
    >
      {children}
    </CreateSessionContext.Provider>
  );
};
