import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUsers } from "../actions/usersActions";
import useFetch from "../custom-hooks/useFetch";

const Users = () => {
  //use useFetch hook
  const { data, error, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const {users} = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addUsers(data));
  }, [data]);

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
