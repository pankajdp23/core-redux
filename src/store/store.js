import { applyMiddleware, combineReducers, compose, createStore } from "redux";
// import counterReducer from "../reducers/postsReducer";
import postsReducer from "../reducers/postsReducer";
import usersReducer from "../reducers/usersReducer";
import albumsReducers from "../reducers/albumsReducers";
import { todosReducer } from "../reducers/todosReducer";

const middleware = (store) => (next) => (action) => {
  action.payload = action.payload.slice(0, 50);
  console.log("action", action);
  next(action);
};

/*
const middleware = function(store) {
  return function(next) {
    return function(action) {
      next(action);
    }
  }
}*/

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    posts: postsReducer,
    users: usersReducer,
    albums: albumsReducers,
    todos: todosReducer,
  }),
  composeEnhancers(applyMiddleware(middleware))
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/*
store.subscribe(() => {
  console.log("state", store.getState());
});*/

export default store;
