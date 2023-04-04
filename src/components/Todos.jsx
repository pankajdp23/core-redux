import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startAddTodos } from "../actions/todosAction";
import { Link, Outlet } from "react-router-dom";

const Todos = () => {
  const dispatch = useDispatch();
  const { data: todos, loading, error } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(startAddTodos());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
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
