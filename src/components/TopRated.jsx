import { Box, Paper } from "@mui/material";
import React from "react";
import ContainCards from "./ContainCards";
import { useEffect } from "react";
import useMovies from "./useMovies";


export default function TopRated() {
    const { getData, data } = useMovies([]);
    const apiKey = import.meta.env.VITE_TMDB_API_KEY
    useEffect(() => {
      getData(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
    },  [])
  return (
    <Box
      sx={{
        width: { xs: "80%", md: "95%" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 3,
          width: "90%",
          marginTop: 2,
          fontSize: "1,5rem",
          fontWeight: "bold",
        }}
      >
        Más Votadas
      </Paper>
      <Box>
        <ContainCards data={data}/>
      </Box>
    </Box>
  );
}
