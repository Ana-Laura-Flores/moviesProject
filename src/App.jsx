import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar.jsx";
import CarrouselHome from "./views/CarrouselHome.jsx";
import DetailMovie from "./views/DetailMovie.jsx";
import Novedades from "./views/Novedades.jsx";
import Populares from "./views/Populares.jsx";
import TopRated from "./views/TopRated.jsx";
import Footer from "./components/Footer.jsx";
import SearchMovie from "./views/SearchMovie.jsx";

import FavoriteContextProvider from "./context/FavoriteContext.jsx";
import FavoritesMovies from "./views/FavoritesMovies.jsx";

export default function App() {
  

  return (
    <BrowserRouter>
    <FavoriteContextProvider>
      <NavBar />
      <Routes>
        <Route path="/detailMovies/:id" element={<DetailMovie />} />
        <Route
          path="/"
          element={<CarrouselHome />}
        ></Route>
        <Route path="/novedades" element={<Novedades />}></Route>
        <Route path="/populares" element={<Populares />}></Route>
        <Route path="/top10" element={<TopRated />}></Route>
        <Route path="/buscar" element={<SearchMovie />}></Route>
        <Route path="/favoritas" element={<FavoritesMovies />}></Route>
      </Routes>
      <Footer />
      </FavoriteContextProvider>
    </BrowserRouter>
  );
}
