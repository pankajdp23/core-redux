import { applyMiddleware, combineReducers, compose, createStore } from "redux";
// import counterReducer from "../reducers/postsReducer";
import postsReducer from "../reducers/postsReducer";
import usersReducer from "../reducers/usersReducer";
import albumsReducers from "../reducers/albumsReducers";
import { todosReducer } from "../reducers/todosReducer";

import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    posts: postsReducer,
    users: usersReducer,
    albums: albumsReducers,
    todos: todosReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
