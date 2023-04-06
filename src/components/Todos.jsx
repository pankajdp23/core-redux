import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { addTodosError, addTodosLoading, addTodosSuccess } from "../reducers/features/todosSlice";
import axios from "axios";

const Todos = () => {
  const dispatch = useDispatch();
  const { data: todos, loading, error } = useSelector((state) => state.todos);

  useEffect(() => {
    const getPosts = async () => {
      try {
        dispatch(addTodosLoading());
        const { data: response } = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        console.log({ response });
        dispatch(addTodosSuccess(response));
      } catch (error) {
        console.log(error);
        dispatch(addTodosError());
      }
    };

    getPosts();
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="error">Something went wrong</p>;
  }
  return (
    <React.Fragment>
      <Outlet />
      {todos.map(({id, title, completed}) => (
        <div key={id}>
          <Link to={`/todos/${id}`} state={{id, title, completed}}>
            <h3>{id + ". " + title}</h3>
          </Link>
          <p>Completed: {"" +completed}</p>
        </div>
      ))}
    </React.Fragment>
  );
};

export default Todos;
