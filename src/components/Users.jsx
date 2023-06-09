import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startAddUsers } from "../actions/usersActions";

const Users = () => {
  const { loading, error, data: users } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startAddUsers());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <ul>
      {users.map(({ email, name, website, id }) => (
        <li key={id}>
          <h2>{name}</h2>
          <p>{website}</p>
          <p>{email}</p>
        </li>
      ))}
    </ul>
  );
};

export default Users;
