import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPosts } from "../actions/postsActions";
import useFetch from "../custom-hooks/useFetch";

const Posts = () => {
  const { posts } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  useEffect(() => {
    dispatch(addPosts(data));
  }, [data]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

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
