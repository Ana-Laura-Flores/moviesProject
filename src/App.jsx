import Header from "./components/Header.jsx";
import ContainCards from "./components/ContainCards";
import DetailMovie from "./components/DetailMovie.jsx";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Carrousel from "./components/Carrousel.jsx";
import CarrouselNuevo from "./components/CarrouselLoMasVotado.jsx";
import YouTube from 'react-youtube';
import NavBar from "./components/NavBar.jsx";
import CarrouselHome from "./components/CarrouselHome.jsx";
import useMovies from "./components/useMovies.js";
import ListMovies from "./components/Novedades.jsx";
import Novedades from "./components/Novedades.jsx";
import Populares from "./components/Populares.jsx";
import TopRated from "./components/TopRated.jsx";


export default function App() {
  const apiUrl = "https://api.themoviedb.org/3"
  const apiKey = import.meta.env.VITE_TMDB_API_KEY
 

  const url_image = "https://image.tmdb.org/t/p/original"
  const [movies, setMovies] = useState([])
  const [searchMovie, setSearchMovie] = useState("")
  const { getData, data } = useMovies([]);


  
  useEffect(() => {
    getData(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`)
    //getData(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
  
  },  [])
  
  console.log(data)

  return(
    <BrowserRouter>
      <NavBar setSearchMovie={setSearchMovie}/>
      <Routes>
        {/* <Route path="/containerCards" element={<ContainCards movies={data}/>}></Route> */}
        <Route path="/movies"  ></Route>
        <Route path="/carrousel" element={<Carrousel/>}></Route>
        {/* <Route path="/carrousel2" element={<CarrouselNuevo movies={data}/>}></Route> */}
        <Route path='/detailMovies/:id' element={ <DetailMovie/>}/>
        {/* <Route path="/nav" element={<NavBar setSearchMovie={setSearchMovie}/>}></Route> */}
        <Route path="/" element={<CarrouselHome movies={data}/>}></Route>
        <Route path="/novedades" element={<Novedades/>}></Route>
        <Route path="/populares" element={<Populares/>}></Route>
        <Route path="/top10" element={<TopRated/>}></Route>
      </Routes>
    </BrowserRouter>
  )
  
}


