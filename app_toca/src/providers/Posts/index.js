import { createContext, useContext, useState } from "react";
import { api } from "../../services/api";
import { CreateSessionContext } from "../CreateSession";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [allPosts, setAllPosts] = useState();
  const [onePost, setOnePost] = useState();

  const { userToken } = useContext(CreateSessionContext);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
  };

  const createPost = (area_id, post) => {
    api
      .post(`/posts/${area_id}`, post, config)
      .then()
      .catch((err) => console.log(err));
  };
  const updatePost = () => {};
  const deletePost = () => {};
  const listPostsOwner = () => {};
  const showPost = () => {};
  const listPostsFromArea = () => {};

  return (
    <PostContext.Provider
      value={{
        allPosts,
        onePost,
        createPost,
        updatePost,
        deletePost,
        listPostsOwner,
        listPostsFromArea,
        showPost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
