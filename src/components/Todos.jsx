import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startAddTodos } from "../actions/todosAction";

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
      {todos.map((todo) => (
        <div key={todo.id}>
          <h3>{todo.title}</h3>
          <p>Completed: {"" + todo.completed}</p>
        </div>
      ))}
    </React.Fragment>
  );
};

export default Todos;
