import { useState } from "react";
import axios from "axios";

export default function useMovies(initialValue) {
  const [data, setData] = useState(initialValue);
  const [details, setDetails] = useState(initialValue);
  const [genres, setGenres] = useState([])

  const getData = async (url) => {
    try {
      const { data } = await axios.get(url);
      setData(data.results);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getDetailsData = async (url) => {
    try {
      const { data } = await axios.get(url);
      setDetails(data);
      setGenres(data.genres)
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  return { data, getData, genres, details, getDetailsData };
}
