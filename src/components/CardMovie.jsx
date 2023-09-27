import { useContext } from "react";

import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Paper,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import { FavoriteContext } from "../context/FavoriteContext.jsx";

import notImageBackdrop from "../assets/img/not-image-backdrop.jpg";

export default function CardMovie({ movie }) {
  const image_path = "https://image.tmdb.org/t/p/original";

  const { getFavorite, addFavorite, removeFavorite } =
    useContext(FavoriteContext);

  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: 345,
        margin: 3,
        display: "flex",
        flexDirection: "column",
        flexWrap: "warp",
      }}
    >
      <Link
        to={`/detailMovies/${movie.id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={
              movie.backdrop_path
                ? `${image_path}${movie.backdrop_path}?api_key=${
                    import.meta.env.VITE_TMDB_API_KEY
                  }`
                : notImageBackdrop
            }
            alt={movie.title}
            key={movie.id}
          />
        </CardActionArea>
      </Link>
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography gutterBottom variant="h5" component="div">
            {movie.title}
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ alignItems: "flex-end" }}
          >
            {getFavorite(movie.id) ? (
              <AiFillHeart size={25} onClick={() => removeFavorite(movie)} />
            ) : (
              <AiOutlineHeart size={25} onClick={() => addFavorite(movie)} />
            )}
          </Typography>
        </Box>

        <Typography variant="body2" color="text.secondary">
          {movie.overview}
        </Typography>
      </CardContent>
    </Paper>
  );
}
