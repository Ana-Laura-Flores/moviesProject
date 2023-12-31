import { Box, Paper } from "@mui/material";
import React from "react";
import ContainCards from "../components/ContainCards";
import ErrorDisplay from "../components/ErrorDisplay";
import { useEffect, useState } from "react";
import useMovies from "../customHooks/useMovies";

import { RiseLoader } from "react-spinners";

export default function MoviesTypes({ type, titleType }) {
    const { getData, data, totalPages, loading, error } = useMovies([]);
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
                        padding: 2,
                        marginTop: 2,
                        fontSize: "1,5rem",
                        fontWeight: "bold",
                    }}
                >
                    {titleType}
                </Paper>
            </Box>
            {error ? (
                <ErrorDisplay type="notFound" />
            ) : !data.results ? (
                <Box height={"auto"} padding={5}>
                    <RiseLoader
                        loading={loading}
                        color="whitesmoke"
                        sx={{ padding: 3, height: "60px" }}
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
