import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startAddAlbums } from "../actions/albumsActions";

const Albums = () => {
  const { data: albums, loading, error } = useSelector((state) => state.albums);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startAddAlbums());
  }, [dispatch]);

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
