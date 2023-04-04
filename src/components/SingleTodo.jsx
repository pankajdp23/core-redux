import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation, useParams } from 'react-router-dom'

const SingleTodo = () => {
  const {data} =  useSelector(state => state.todos);
  const {state} =  useLocation();
  const {id} = useParams();
  const {id: todoId, title, completed} = state || data.find(todo => todo.id === +id) || {};
  

  if (!title) {
    return <Navigate to="/todos" />;
  }
  
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 /*behavior: "smooth"*/ });
  }, [title]);

  return (
    <div>
        <h3>{`${todoId} : ${title}`}</h3>
        <p>{`${completed}`}</p>
    </div>
  )
}

export default SingleTodo