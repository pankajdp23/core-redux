import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const getPosts = async () => {
      try {
        setLoading(true);
        setError("");
        const { data: response } = await axios.get(url);
        console.log({ response });
        setData(response);
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getPosts();
  }, []);

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
