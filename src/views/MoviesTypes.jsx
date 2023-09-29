import { Box, Paper } from "@mui/material";
import React from "react";
import ContainCards from "../components/ContainCards";
import { useEffect, useState } from "react";
import useMovies from "../customHooks/useMovies";

import { RiseLoader } from "react-spinners";

export default function MoviesTypes({ type, titleType }) {
    const { getData, data, totalPages, loading } = useMovies([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [prevType, setPrevType] = useState(null);

    const apiKey = import.meta.env.VITE_TMDB_API_KEY;

    useEffect(() => {
        if (type !== prevType) {
            setCurrentPage(1);
            setPrevType(type);
        }
        getData(
            `https://api.themoviedb.org/3/movie/${type}?language=es-ES&page=${currentPage}&api_key=${apiKey}`
        );
    }, [currentPage, titleType]);

    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Box sx={{ width: { xs: "85%", md: "95%" } }}>
                <Paper
                    elevation={3}
                    sx={{
                        display: "flex",
                        padding: 3,

                        marginTop: 2,
                        fontSize: "1,5rem",
                        fontWeight: "bold",
                    }}
                >
                    {titleType}
                </Paper>
            </Box>

            {!data.results ? (
                <Box height={"auto"}>
                    <RiseLoader
                        loading={loading}
                        color="whitesmoke"
                        sx={{ padding: 2, height: "30px" }}
                    />
                </Box>
            ) : (
                <Box>
                    <ContainCards
                        data={data.results}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                        totalPages={totalPages}
                    />
                </Box>
            )}
        </Box>
    );
}
