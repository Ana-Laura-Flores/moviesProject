import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar.jsx";
import CarrouselHome from "./views/CarrouselHome.jsx";
import DetailMovie from "./views/DetailMovie.jsx";

import Footer from "./components/Footer.jsx";
import SearchMovie from "./views/SearchMovie.jsx";

import FavoriteContextProvider from "./context/FavoriteContext.jsx";
import FavoritesMovies from "./views/FavoritesMovies.jsx";
import MoviesTypes from "./views/MoviesTypes.jsx";
import NotFound from "./components/NotFound.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <FavoriteContextProvider>
                <NavBar />
                <Routes>
                    
                    <Route path="/detailMovies/:id" element={<DetailMovie />} />
                    <Route path="/" element={<CarrouselHome />} exact />
                    <Route
                        path="/novedades"
                        element={
                            <MoviesTypes
                                type="now_playing"
                                titleType="Novedades"
                            />
                        }
                    />
                    <Route
                        path="/populares"
                        element={
                            <MoviesTypes type="popular" titleType="Populares" />
                        }
                    />
                    <Route
                        path="/top10"
                        element={
                            <MoviesTypes
                                type="top_rated"
                                titleType="Más Votadas"
                            />
                        }
                    />
                    <Route path="/buscar" element={<SearchMovie />}/>
                    <Route
                        path="/favoritas"
                        element={<FavoritesMovies />}
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </FavoriteContextProvider>
        </BrowserRouter>
    );
}
