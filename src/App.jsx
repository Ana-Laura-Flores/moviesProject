import { useEffect, useState } from "react";
import DetailMovie from "./components/DetailMovie.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar.jsx";
import CarrouselHome from "./components/CarrouselHome.jsx";
import useMovies from "./components/useMovies.js";
import Novedades from "./components/Novedades.jsx";
import Populares from "./components/Populares.jsx";
import TopRated from "./components/TopRated.jsx";
import Footer from "./components/Footer.jsx";
import SearchMovie from "./components/SearchMovie.jsx";

export default function App() {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  const [searchMovie, setSearchMovie] = useState("");
  const { getData, data, loading } = useMovies([]);
  
  

  useEffect(() => {
    getData(
      `https://api.themoviedb.org/3/movie/now_playing?language=es-ES&api_key=${apiKey}`
    );
  }, []);

  return (
    <BrowserRouter>
      <NavBar setSearchMovie={setSearchMovie} />
      <Routes>
        <Route path="/detailMovies/:id" element={<DetailMovie />} />
        <Route
          path="/"
          element={<CarrouselHome movies={data.results} loading={loading} />}
        ></Route>
        <Route path="/novedades" element={<Novedades />}></Route>
        <Route path="/populares" element={<Populares />}></Route>
        <Route path="/top10" element={<TopRated />}></Route>
        <Route path="/buscar" element={<SearchMovie />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
