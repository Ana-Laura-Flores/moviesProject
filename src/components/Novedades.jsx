import { Box, Paper } from '@mui/material'
import React from 'react'
import ContainCards from './ContainCards'
import { useEffect, useState } from "react";
import useMovies from "./useMovies";

import PaginationApp from './PaginationApp';

export default function Novedades() {
  const { getData, data } = useMovies([]);
  const [currentPage, setCurrentPage] = useState(1)
  const apiKey = import.meta.env.VITE_TMDB_API_KEY

  useEffect(() => {
    getData(`https://api.themoviedb.org/3/movie/now_playing?language=es-ES&page=${currentPage}&api_key=${apiKey}`)
  },  [currentPage])

  return (
    <Box sx={{width: {xs:"80%", md:"95%"}, display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <Paper elevation={3} sx={{padding: 3, width:"90%", marginTop: 2, fontSize: "1,5rem", fontWeight:"bold"}}> Novedades </Paper>
        <Box>
            <ContainCards data={data} />
        </Box>
        <PaginationApp setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    </Box>
  )
}
