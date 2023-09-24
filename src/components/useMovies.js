import { useState } from "react";
import axios from "axios";


export default function useMovies(initialValue) {
  const [data, setData] = useState(initialValue);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true)

  const getData = async (url) => {
    try {
      const { data } = await axios.get(url);
      setData(data);
      //setLoading(false)
      data.genres ? setGenres(data.genres) : null;
    } catch (error) {
      console.log(error);
    }
  };

  return { data, getData, genres, loading };
}
