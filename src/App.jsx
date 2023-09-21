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
import ListMovies from "./components/ListMovies.jsx";


export default function App() {
  const apiUrl = "https://api.themoviedb.org/3"
  const apiKey = import.meta.env.VITE_TMDB_API_KEY
  //https://api.themoviedb.org/3/movie/615656/videos?api_key=2f696cbdcc4342791a4d6382c2f63266

  const url_image = "https://image.tmdb.org/t/p/original"
  const [movies, setMovies] = useState([])
  const [searchMovie, setSearchMovie] = useState("")
  const { getData, data } = useMovies([]);


  // const options = {
  //   method: 'GET',
  //   headers: {
  //     accept: 'application/json',
  //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOWQ0YzIxMDU1MDkyY2FhMTU5ZmNmMjlmNTIyNjI3ZiIsInN1YiI6IjY0ODEwNjcxZTM3NWMwMDEzOWJlNTY1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.75JRp0q6UuVKGXFpTbZoBotjhfC9u6y84xnc_ZraJtw'
  //   }
  // };
  
  // fetch('https://api.themoviedb.org/3/authentication', options)
  //   .then(response => response.json())
  //   .then((result) => console.log(result))
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     accept: 'application/json',
  //     Authorization: '2515b2b49a4b6e8f7589cb2703b71625'
  //   }
  // };
  
  //https://api.themoviedb.org/3/movie/now_playing
  
  useEffect(() => {
    getData(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`)
    //getData(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
  
  },  [])
  // fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`) 
    // top_rated
   
    // .then(response => response.json())
    // .then(response => setMovies(response.results))
  
    // .catch(err => console.error(err));

  console.log(data)
// url images https://api.themoviedb.org/3/movie/615656/images?api_key=2f696cbdcc4342791a4d6382c2f63266
  return(
    <BrowserRouter>
      <NavBar setSearchMovie={setSearchMovie}/>
      <Routes>
        <Route path="/containerCards" element={<ContainCards movies={data}/>}></Route>
        <Route path="/movies"  ></Route>
        <Route path="/carrousel" element={<Carrousel/>}></Route>
        {/* <Route path="/carrousel2" element={<CarrouselNuevo movies={data}/>}></Route> */}
        <Route path='/detailMovies/:id' element={ <DetailMovie/>}/>
        {/* <Route path="/nav" element={<NavBar setSearchMovie={setSearchMovie}/>}></Route> */}
        <Route path="/" element={<CarrouselHome movies={data}/>}></Route>
        <Route path="/list" element={<ListMovies/>}></Route>
      </Routes>
    </BrowserRouter>
  )
  
}


