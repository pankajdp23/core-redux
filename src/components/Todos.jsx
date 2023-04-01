import React, { useEffect } from "react";
import useFetch from "../custom-hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { addTodos } from "../actions/todosAction";

const Todos = () => {
  const { data, error, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state);
  console.log("todos", todos);

  useEffect(() => {
    dispatch(addTodos(data));
  }, [data]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <React.Fragment>
      {todos.map((todo) => (
        <h3 key={todo.id}>{todo.title}</h3>
      ))}
    </React.Fragment>
  );
};

export default Todos;
