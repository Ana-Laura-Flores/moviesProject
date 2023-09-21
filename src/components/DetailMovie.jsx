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

export default function DetailMovie() {
  const { id } = useParams();
  const { details, genres, getDetailsData } = useMovies([]);
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

  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

 

  useEffect(() => {
    getDetailsData(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
    );
  }, []);
 
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(https://image.tmdb.org/t/p/original${details.backdrop_path}?api_key=${apiKey})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        zIndex: -1,
        height: "100%"
        
        
      }}
    >
      <Box
        sx={{
          
          padding: "5px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "100vh",
        }}
      >
       
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: "center",
            width: "70%",
            marginTop: {xs: 10}
          }}
        >
          <img
            src={
              details
                ? `https://image.tmdb.org/t/p/original${details.poster_path}?api_key=${apiKey}`
                : ""
            }
            alt=""
            style={{ width: "45%" }}
          />
          <Box marginLeft={{ xs: 0, md: 5 }} sx={{width: {xs: "60%"}, alignItems: "center", marginTop: {xs: 3}}}>
            <Typography gutterBottom variant="h4" component="div">
              {details.title}
              <Typography></Typography>
            </Typography>
            <Typography component="div" marginTop="5px" variant="h6">
              Descripción:
              </Typography>
            <Typography variant="body2" color="text.secondary">
              {details.overview}
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
          {/* <Button size="small">Share</Button>
          {showTrailer ? (
        <TrailerViewer />
      ) : (
        <Button size="small" onClick={handleShowTrailer}>
          Mirá el Trailer
        </Button>)} */}
          {/* <Button size="small"onClick={()=> <TrailerViewer />}>Mirá el Trailer</Button> */}
        </Box>
          </Box>
        </Box>
        
      </Box>
    </Box>
  );
}
