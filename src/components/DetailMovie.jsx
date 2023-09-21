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

  // const {genres} = details;
  // console.log(genres.map((gen => console.log(gen))));
  // console.log(details.genres)

  //genres.filter(genre => {console.log(genre.name)})
  //console.log(id);
  // const oneMovie = data.find((movie) => movie.id == id);
  //console.log(oneMovie)
  //const genresAll = `https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_TMDB_API_KEY}`

  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  //https://api.themoviedb.org/3/genre/movie/list?api_key=2515b2b49a4b6e8f7589cb2703b71625

  useEffect(() => {
    getDetailsData(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
    );
  }, []);
  // console.log(
  //   `https://image.tmdb.org/t/p/original${oneMovie.poster_path}?api_key=${apiKey}`
  // );
  console.log(details);
  console.log(id);
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(https://image.tmdb.org/t/p/original${details.backdrop_path}?api_key=${apiKey})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        zIndex: -1,
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box
        sx={{
          maxWidth: 1200,
          padding: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        {/* <CardMedia
        component="img"
        alt="green iguana"
        
        height="300"
        image={oneMovie ? `https://image.tmdb.org/t/p/original${oneMovie.poster_path}?api_key=${apiKey}` : ""}
        
        key={id}
      /> */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "70%",
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
          <Box marginLeft={5}>
            <Typography gutterBottom variant="h4" component="div">
              {details.title}
              <Typography></Typography>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {details.overview}
            </Typography>
            <Typography component="div" marginTop="5px" variant="h6">
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
