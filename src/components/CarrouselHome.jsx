import React, { useState } from "react";
import CarrouselLoMasVotado from "./CarrouselLoMasVotado";
import CarrouselPopulares from "./CarrouselPopulares";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { Box } from "@mui/material";
import { Link } from "react-router-dom";


export default function CarrouselHome({ movies }) {
  const [id, setId] = useState(null);
  console.log(movies);

  const handleClick = (movieId) => {
    setId(movieId.id);
    console.log(movieId);
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
        {movies &&
          movies.map((movie) => (
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
          ))}
      </Carousel>
      <CarrouselPopulares/>
      <CarrouselLoMasVotado/>
      {/* {id && <DetailMovie movieId={id} />} */}
    </Box>
  );
}
