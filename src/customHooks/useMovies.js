import { useState } from "react";
import axios from "axios";


export default function useMovies(initialValue) {
  const [data, setData] = useState(initialValue);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true)
  const [totalPages, setTotalPages] = useState()
  const [yearMovie, setYearMovie] = useState()

  const getData = async (url) => {
    try {
      const { data } = await axios.get(url);
      setData(data);
      setTotalPages(data.total_pages)
      data.genres ? setGenres(data.genres) : null;
      data.release_date ? setYearMovie(data.release_date.split("-")[0]) : null
      data ? setLoading(false) : true
    } catch (error) {
      console.log(error);
    }
  };
console.log(totalPages)
  return { data, getData, totalPages, genres, loading, yearMovie};
}
