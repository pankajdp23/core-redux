import { combineReducers, createStore } from "redux";
// import counterReducer from "../reducers/postsReducer";
import postsReducer from "../reducers/postsReducer";
import usersReducer from "../reducers/usersReducer";
import albumsReducers from "../reducers/albumsReducers";
import { todosReducer } from "../reducers/todosReducer";

const store = createStore(
  combineReducers({
    posts: postsReducer,
    users: usersReducer,
    albums: albumsReducers,
    todos: todosReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/*
store.subscribe(() => {
  console.log("state", store.getState());
});*/

export default store;
