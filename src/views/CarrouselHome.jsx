import React, { useState, useEffect } from "react";
import CarrouselLoMasVotado from "./Carrousels/CarrouselLoMasVotado";
import CarrouselPopulares from "./Carrousels/CarrouselPopulares";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { Box } from "@mui/material";
import { RiseLoader } from "react-spinners";
import { Link } from "react-router-dom";
import useMovies from "../customHooks/useMovies.js";

export default function CarrouselHome() {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  const { getData, data, loading } = useMovies([]);
  const [id, setId] = useState(null);

  useEffect(() => {
    getData(
      `https://api.themoviedb.org/3/movie/now_playing?language=es-ES&api_key=${apiKey}`
    );
  }, []);

  const handleClick = (movieId) => {
    setId(movieId.id);
  };

  return (
    <Box sx={{ marginTop: "50px", margin: "15px" }}>
      <Carousel
        showArrows={true}
        autoPlay={true}
        onClickItem={handleClick}
        dynamicHeight={false}
        interval={2000}
      >
        {!data.results ? (
          <Box height={"auto"} padding={5}>
            <RiseLoader
              loading={loading}
              sx={{ color: "black", padding: 2, height: "30px" }}
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
                style={{ opacity: 0.7, padding: "15px 5px" }}
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
                <p style={{ color: "whitesmoke", fontSize: "0.6rem" }}>
                  {movie.overview}
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
      </Carousel>
      <CarrouselPopulares />
      <CarrouselLoMasVotado />
      {/* {id && <DetailMovie movieId={id} />} */}
    </Box>
  );
}
