import { Box, Paper } from "@mui/material";
import React from "react";
import ContainCards from "../components/ContainCards";
import PaginationApp from '../components/PaginationApp';
import { useEffect, useState } from "react";
import useMovies from "../customHooks/useMovies";
import NotFound from "../components/NotFound";



export default function TopRated() {
    const { getData, data, totalPages, error } = useMovies([]);
    const [currentPage, setCurrentPage] = useState(1)
    const apiKey = import.meta.env.VITE_TMDB_API_KEY
    useEffect(() => {
      getData(`https://api.themoviedb.org/3/movie/top_rated?language=es-ES&page=${currentPage}&api_key=${apiKey}`)
    },  [currentPage])
  return (
    error ? <NotFound/> :
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
        <ContainCards data={data.results} setCurrentPage={setCurrentPage} currentPage={currentPage} totalPages={totalPages}/>
      </Box>
      
    </Box>
  );
}
