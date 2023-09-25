import React, { useEffect, useState } from "react";
import TrailerViewer from "./TrailerViewer";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { useParams } from "react-router-dom";
import useMovies from "./useMovies";
import notImageBackdrop from '../assets/img/not-image-backdrop.jpg'
import notImagenPoster from '../assets/img/not-image-poster.jpg'

export default function DetailMovie() {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  const { id } = useParams();
  const { data, genres, getData } = useMovies([]);
  const [showTrailer, setShowTrailer] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  const handleShowTrailer = () => {
    setShowTrailer(true);
  };

  useEffect(() => {
    getData(
      `https://api.themoviedb.org/3/movie/${id}?language=es-ES&api_key=${apiKey}`
    );
  }, []);
 
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.4)), url( ${ data.backdrop_path ? `https://image.tmdb.org/t/p/original${data.backdrop_path}?api_key=${apiKey}` : notImageBackdrop})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        zIndex: -1,
        height: "auto",
        padding: {xs: 3}
        
        
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
            width: "70%",
            marginTop: {xs: 1}
          }}
        >
          <img
            src={
              data.poster_path
                ? `https://image.tmdb.org/t/p/original${data.poster_path}?api_key=${apiKey}`
                : notImagenPoster
            }
            alt=""
            style={{ width: "45%" }}
          />
          <Box marginLeft={{ xs: 0, md: 5 }} sx={{width: {xs: "60%"}, alignItems: "center", marginTop: {xs: 3}}}>
            <Typography gutterBottom variant="h4" component="div">
              {data.title}
              <Typography></Typography>
            </Typography>
            <Typography component="div" marginTop="5px" variant="h6">
              Descripción:
              </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.overview}
            </Typography>
            <Typography component="div" marginTop={1} variant="h6">
              Géneros:
              <Typography gutterBottom marginLeft="10px" component="div">
                {genres.map((genre) => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </Typography>
            </Typography>
            <Box marginTop={2} sx={{display:"flex", justifyContent:"start", alignItems:"flex-start" }}>
          <Button
            size="small"
            onClick={openVideoModal}
            sx={{ backgroundColor: "gray", color: "whiteSmoke", padding:1 }}
            
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
              <Button onClick={closeVideoModal}>Cerrar Trailer</Button>
            </DialogActions>
          </Dialog>
       
        </Box>
          </Box>
        </Box>
        
      </Box>
    </Box>
  );
}
