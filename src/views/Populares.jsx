import { Box, Paper } from "@mui/material";
import React from "react";
import ContainCards from "../components/ContainCards";
import { useEffect, useState } from "react";
import useMovies from "../customHooks/useMovies";
import PaginationApp from '../components/PaginationApp';


export default function Populares() {
    const { getData, data, totalPages } = useMovies([]);
    const [currentPage, setCurrentPage] = useState(1)
    const apiKey = import.meta.env.VITE_TMDB_API_KEY
    useEffect(() => {
      getData(`https://api.themoviedb.org/3/movie/popular?language=es-ES&page=${currentPage}&api_key=${apiKey}`)
    },  [currentPage])
    
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
        Populares
      </Paper>
      <Box>
        <ContainCards data={data.results} setCurrentPage={setCurrentPage} currentPage={currentPage} totalPages={totalPages}/>
      </Box>
      {/* <PaginationApp setCurrentPage={setCurrentPage} currentPage={currentPage} totalPages={totalPages}/> */}
    </Box>
  );
}
