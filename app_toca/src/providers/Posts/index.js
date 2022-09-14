import { createContext, useContext, useState } from "react";
import { api } from "../../services/api";
import { CreateSessionContext } from "../CreateSession";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [allPosts, setAllPosts] = useState();
  const [onePost, setOnePost] = useState();
  const [allPostsOwner, setAllPostsOwner] = useState();

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

  const updatePost = (post_id, postUpdate) => {
    api
      .patch(`/posts/${post_id}`, postUpdate, config)
      .then()
      .catch((err) => console.log(err));
  };

  const deletePost = (post_id) => {
    api
      .delete(`/posts/${post_id}`, config)
      .then()
      .catch((err) => console.log(err));
  };

  const listPostsOwner = () => {
    api
      .get(`/posts`, config)
      .then((res) => setAllPostsOwner(res.data))
      .catch((err) => console.log(err));
  };

  const showPost = (post_id) => {
    api
      .get(`/posts/${post_id}`, config)
      .then((res) => setOnePost(res.data))
      .catch((err) => console.log(err));
  };

  const listPostsFromArea = (area_id) => {
    api
      .get(`/posts/areas/${area_id}`, config)
      .then((res) => setAllPosts(res.data))
      .catch((err) => console.log(err));
  };

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
