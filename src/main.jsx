import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import store from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Posts from "./components/Posts";
import Users from "./components/Users";
import Albums from "./components/Albums";
import Todos from "./components/Todos";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/users" element={<Users />} />
          <Route path="/albums" element={<Albums />} />
          <Route path= "/todos" element={<Todos />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
