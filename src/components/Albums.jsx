import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addAlbumsError, addAlbumsLoading, addAlbumsSuccess } from "../reducers/features/albumsSlice";

const Albums = () => {
  const { data: albums, loading, error } = useSelector((state) => state.albums);
  const dispatch = useDispatch();

  useEffect(() => {
   const getAlbums = async () => {
    try {
      dispatch(addAlbumsLoading());
      const {data} = await axios.get("https://jsonplaceholder.typicode.com/albums");
      dispatch(addAlbumsSuccess(data));
      console.log(data)
    } catch (err) {
      dispatch(addAlbumsError());
    } 
   }
   getAlbums();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="error">Something went wrong. Please try again.</p>;
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
