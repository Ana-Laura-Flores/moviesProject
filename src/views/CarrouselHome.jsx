import React, { useEffect } from "react";

import Carrousel from "../components/Carrousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as CarouselReact } from "react-responsive-carousel";

import { Box } from "@mui/material";
import { RiseLoader } from "react-spinners";
import { Link } from "react-router-dom";
import useMovies from "../customHooks/useMovies.js";
import ErrorDisplay from "../components/ErrorDisplay";

export default function CarrouselHome() {
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;
    const { getData, data, loading, error } = useMovies([]);

    useEffect(() => {
        getData(
            `https://api.themoviedb.org/3/movie/now_playing?language=es-ES&api_key=${apiKey}`
        );
    }, []);

    return (
        <Box
            sx={{
                marginTop: "50px",
                margin: "15px",
                backgroundColor: "#1e1e1e",
            }}
        >
            <CarouselReact
                showArrows={true}
                autoPlay={true}
                showThumbs={false}
                dynamicHeight={false}
                interval={2000}
            >
                {error ? (
                    <ErrorDisplay type="notFound" />
                ) : !data.results ? (
                    <Box height={"auto"} padding={5}>
                        <RiseLoader
                            loading={loading}
                            color={"whitesmoke"}
                            sx={{ padding: 2, height: "30px" }}
                        />
                    </Box>
                ) : (
                    data.results.map((movie) => (
                        <div key={movie.id} style={{ maxHeight: "450px" }}>
                            <img
                                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                                alt={movie.title}
                            />
                            <div
                                className="legend"
                                style={{ opacity: 0.7, padding: "10px 5px" }}
                            >
                                <p
                                    style={{
                                        color: "whitesmoke",
                                        fontSize: "1rem",
                                        fontWeight: "bold",
                                    }}
                                >
                                    {movie.title}
                                </p>
                                <p
                                    style={{
                                        color: "whitesmoke",
                                        fontSize: "0.6rem",
                                    }}
                                >
                                    {movie.overview.length > 100
                                        ? movie.overview.substring(0, 100) +
                                          "..."
                                        : movie.overview}
                                </p>
                                <Link to={`/detailMovies/${movie.id}`}>
                                    <button
                                        style={{
                                            border: "none",
                                            cursor: "pointer",
                                            opacity: 0.8,
                                            borderRadius: "5px",
                                            padding: " 5px 10px",
                                        }}
                                    >
                                        Ver más
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))
                )}
            </CarouselReact>
            <Carrousel
                url={`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`}
                title="Popular"
            />
            <Carrousel
                url={`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`}
                title="Lo más Votado"
            />
        </Box>
    );
}
