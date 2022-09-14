import { createContext } from "react";
import { api } from "../../services/api";
import { useContext } from "react";
import { CreateSessionContext } from "../CreateSession";

export const CommentsContext = createContext();

export const CommentsProvider = ({ children }) => {
  const { userToken } = useContext(CreateSessionContext);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
  };

  const createComment = (post_id, data) => {
    api
      .post(`/comments/${post_id}`, data, config)
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
  };
  const listCommentsOfPost = (post_id) => {
    api
      .get(`/comments/post/${post_id}`, config)
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
  };
  const updateComment = (comment_id, data) => {
    api
      .patch(`/comments/${comment_id}`, data, config)
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
  };
  const deleteComment = (comment_id) => {
    api
      .delete(`/comments/${comment_id}`, config)
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
  };

  return (
    <CommentsContext.Provider
      value={{
        updateComment,
        deleteComment,
        listCommentsOfPost,
        createComment,
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
};
