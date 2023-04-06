import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../reducers/features/postsSlice";
import userReducer from "../reducers/features/usersSlice";
import albumsReducer from "../reducers/features/albumsSlice";
import todosReducer from "../reducers/features/todosSlice";

const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: userReducer,
    albums: albumsReducer,
    todos: todosReducer,
  },
});

export default store;
