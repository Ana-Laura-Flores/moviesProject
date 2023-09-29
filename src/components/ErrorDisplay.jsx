import { Box } from "@mui/system";
import React from "react";
import notFound from "../assets/img/not-data.jpg";
import notFavorites from "../assets/img/not-favorite-movies.jpg";

export default function ErrorDisplay({ type }) {
    return (
        <Box
            sx={{
                width: "90%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 3,
            }}
        >
            <img
                src={type === "notFound" ? notFound : notFavorites}
                style={{ width: "60%", minWidth: "60%" }}
                alt=""
            />
        </Box>
    );
}
