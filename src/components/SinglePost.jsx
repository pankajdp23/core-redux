import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation, useParams } from "react-router-dom";

const SinglePost = () => {
  const { loading, error, data } = useSelector((state) => state.posts);
  const { state } = useLocation();
  const { id } = useParams();
  const { body, title } = state || data.find((post) => post.id === +id) || {};

  if (!body || !title) {
    return <Navigate to="/posts" />;
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 /*behavior: "smooth"*/ });
  }, [title]);
  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
      <hr />
    </div>
  );
};

export default SinglePost;
