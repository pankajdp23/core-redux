import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPosts } from "../actions/postsActions";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    const getPosts = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      console.log({ data });
      dispatch(addPosts(data));
    };
    getPosts();
  }, []);
  return (
    <ul>
      {posts.map(({ body, id, title }) => (
        <li key={id}>
          <h2>{title}</h2>
          <p>{body}</p>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
