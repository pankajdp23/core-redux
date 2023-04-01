import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useFetch from "../custom-hooks/useFetch";
import { addAlbums } from "../actions/albumsActions";

const Albums = () => {
const {albums} = useSelector(state => state);
const dispatch = useDispatch();
const {data, error, loading} = useFetch("https://jsonplaceholder.typicode.com/albums");

useEffect (()=> {
    dispatch(addAlbums(data));
},[data])

if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div>
        {albums.map(({ id, title }) => (
          <h2 key={id}>{title}</h2>
      ))}
    </div>
  );
};

export default Albums;
