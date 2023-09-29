import { useState, useEffect } from "react";
import useMovies from "../customHooks/useMovies";

import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

//Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Carrousel({ url, title }) {
    const { data, getData } = useMovies([]);
    const [id, setId] = useState("");

    useEffect(() => {
        getData(url);
    }, []);

    const handleClick = (movieId) => {
        setId(movieId.id);
    };

    return (
        <Box sx={{ marginTop: "50px", margin: "15px" }}>
            <Typography
                sx={{
                    color: "whitesmoke",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    marginTop: "30px",
                    marginBottom: "10px",
                }}
            >
                {title}
            </Typography>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={10}
                slidesPerView={3}
                navigation
            >
                {data.results &&
                    data.results.map((movie) => (
                        <SwiperSlide
                            key={movie.id}
                            onClick={() => handleClick(movie.id)}
                        >
                            <Link to={`/detailMovies/${movie.id}`}>
                                <img
                                    className=".swiper-slide img:hover"
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
                                    color: "whitesmoke",
                                    fontSize: "0.7rem",
                                    marginTop: "0px",
                                    fontWeight: "bold",
                                }}
                            >
                                {movie.title}
                            </Typography>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </Box>
    );
}
