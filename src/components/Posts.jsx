import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { getPosts } from "../reducers/features/postsSlice";

const Posts = () => {
  const { loading, error, data: posts } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (loading) {
    return <p className="loading">Loading...</p>;
  }

  if (error) {
    return <p className="error">Something went wrong. Try again later.</p>;
  }

  return (
    <ul>
      <Outlet />
      {posts.map(({ body, id, title }) => (
        <li key={id}>
          <Link
            to={`/posts/${id}`}
            state={{
              body,
              title,
            }}
          >
            <h2>{title}</h2>
          </Link>
          <p>{body}</p>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
