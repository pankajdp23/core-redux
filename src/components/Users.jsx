import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addUsersError,
  addUsersLoading,
  addUsersSuccess,
} from "../reducers/features/usersSlice";
import axios from "axios";

const Users = () => {
  const { loading, error, data: users } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    const getUsers = async () => {
      try {
        dispatch(addUsersLoading());
        const { data: response } = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        console.log({ response });
        dispatch(addUsersSuccess(response));
      } catch (error) {
        console.log(error);
        dispatch(addUsersError());
      }
    };

    getUsers();
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="error">Something went wrong. Try again later.</p>;
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
