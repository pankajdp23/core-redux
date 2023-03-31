import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUsers } from "../actions/usersActions";

const Users = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    const getUsers = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch(addUsers(data));
    };
    getUsers();
  }, []);
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
