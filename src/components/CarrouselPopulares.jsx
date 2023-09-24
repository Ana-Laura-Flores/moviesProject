import { useState, useEffect } from "react";
import useMovies from "./useMovies";

import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

//Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function CarrouselPopulares() {
  const { data, getData } = useMovies([]);
  const [id, setId] = useState("");
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  
  

  useEffect(() => {
    getData(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
    
  }, []);
  
  
  const handleClick = (movieId) => {
    setId(movieId.id);
    // setMoviePop(...data, data)
    // console.log(moviePop)
    
    //  <DetailMovie id={id} movies={moviePop}/>
  };
  console.log(id);
  return (
    <Box sx={{ marginTop: "50px", margin: "15px" }}>
      <Typography
        sx={{
          color: "black",
          fontSize: "1rem",
          fontWeight: "bold",
          marginTop: "80px",
          marginBottom: "10px",
        }}
      >
        Populares
      </Typography>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={3}
        navigation
        //pagination={{ clickable: true }}

        //  onSlideChange={() => ('slide change')}
        //  onSwiper={(swiper) => (swiper)}
      >
        {/* <Link to={`/`} style={{cursor:"pointer"}}> */}
        {data.results &&
          data.results.map((movie) => (
            <SwiperSlide
              key={movie.id}
              onClick={() => handleClick(movie.id)}
            >
              <Link to={`/detailMovies/${movie.id}`}>
                <img
                  style={{
                    width: "100%",
                    aspectRatio: "16/9",
                    objectFit: "cover",
                    borderRadius: 10,
                  }}
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  alt={movie.name}
                />
              </Link>
              <Typography
                sx={{
                  color: "black",
                  fontSize: "0.7rem",
                  marginTop: "0px",
                  fontWeight: "bold",
                }}
              >
                {movie.title}
              </Typography>
            </SwiperSlide>
          ))}

        {/* </Link> */}
      </Swiper>
    </Box>
  );
}
