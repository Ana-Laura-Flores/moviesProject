import React, { useEffect, useState, useContext } from "react";
import TrailerViewer from "../components/TrailerViewer";
import {
    Dialog,
    DialogContent,
    DialogActions,
    Typography,
    Button,
    Box,
} from "@mui/material";
import { useParams } from "react-router-dom";
import useMovies from "../customHooks/useMovies";
import notImageBackdrop from "../assets/img/not-image-backdrop.jpg";
import notImagenPoster from "../assets/img/not-image-poster.jpg";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FavoriteContext } from "../context/FavoriteContext.jsx";

export default function DetailMovie() {
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;
    const { id } = useParams();
    const { data, genres, getData, yearMovie } = useMovies([]);

    const { getFavorite, addFavorite, removeFavorite } =
        useContext(FavoriteContext);
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

    const openVideoModal = () => {
        setIsVideoModalOpen(true);
    };

    const closeVideoModal = () => {
        setIsVideoModalOpen(false);
    };

    useEffect(() => {
        getData(
            `https://api.themoviedb.org/3/movie/${id}?language=es-ES&api_key=${apiKey}`
        );
    }, []);

    return (
        <Box
            sx={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.4)), url( ${
                    data.backdrop_path
                        ? `https://image.tmdb.org/t/p/original${data.backdrop_path}?api_key=${apiKey}`
                        : notImageBackdrop
                })`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                justifyContent: "center",
                zIndex: -1,
                height: "auto",
                padding: { xs: 3 },
            }}
        >
            <Box
                sx={{
                    padding: "5px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        justifyContent: "center",
                        alignItems: "center",
                        width: "90%",
                        marginTop: { xs: 1 },
                    }}
                >
                    <img
                        src={
                            data.poster_path
                                ? `https://image.tmdb.org/t/p/original${data.poster_path}?api_key=${apiKey}`
                                : notImagenPoster
                        }
                        alt=""
                        style={{ width: "30%" }}
                    />
                    <Box
                        marginLeft={{ xs: 0, md: 5 }}
                        sx={{
                            width: { xs: "85%", md: "95%" },
                            alignItems: "center",
                            marginTop: { xs: 3 },
                            padding: 3,
                            borderRadius: "10px",
                            backgroundColor: "#FFFFFF80",
                        }}
                    >
                        <Typography
                            gutterBottom
                            variant="h4"
                            component="div"
                            sx={{
                                display: "flex",
                                flexDirection: { xs: "column", md: "row" },
                                alignItems: "center",
                            }}
                        >
                            {data.title}
                            <Typography
                                variant="h5"
                                sx={{
                                    marginLeft: { md: 3 },
                                    marginRight: { md: 3 },
                                    fontWeight: "bold",
                                    color: "#333",
                                }}
                            >
                                {" "}
                                {yearMovie}
                            </Typography>
                            {getFavorite(data.id) ? (
                                <AiFillHeart
                                    size={25}
                                    onClick={() => removeFavorite(data)}
                                />
                            ) : (
                                <AiOutlineHeart
                                    size={25}
                                    onClick={() => addFavorite(data)}
                                />
                            )}
                        </Typography>
                        <Typography
                            component="div"
                            marginTop="5px"
                            variant="h6"
                        >
                            Descripción:
                        </Typography>
                        <Typography variant="body2" color="black">
                            {data.overview}
                        </Typography>
                        <Typography component="div" marginTop={1} variant="h6">
                            Géneros:
                            <Typography
                                gutterBottom
                                marginLeft="10px"
                                component="div"
                            >
                                {genres.map((genre) => (
                                    <li key={genre.id}>{genre.name}</li>
                                ))}
                            </Typography>
                        </Typography>
                        <Box
                            marginTop={2}
                            sx={{
                                display: "flex",
                                justifyContent: "start",
                                alignItems: "flex-start",
                            }}
                        >
                            <Button
                                size="small"
                                onClick={openVideoModal}
                                sx={{
                                    backgroundColor: "gray",
                                    color: "whiteSmoke",
                                    padding: 1,
                                }}
                            >
                                Ver Trailer
                            </Button>

                            <Dialog
                                open={isVideoModalOpen}
                                onClose={closeVideoModal}
                                maxWidth="lg"
                                fullWidth
                            >
                                <DialogContent>
                                    <TrailerViewer id={id} />
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={closeVideoModal}>
                                        Cerrar Trailer
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
