import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startAddPosts } from "../actions/postsActions";

const Posts = () => {
  const { loading, error, data: posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startAddPosts());
  }, [dispatch]);

  if (loading) {
    return <p className="loading">Loading...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
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
