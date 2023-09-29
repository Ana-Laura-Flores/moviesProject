import { Box } from "@mui/system";
import React from "react";
import notFavorites from "../assets/img/not-favorite-movies.jpg"

export default function NotFavorites() {
    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 3,
            }}
        >
            <img src={notFavorites} style={{ width: "60%", minWidth:"60%"}} alt="" />
        </Box>
    );
}
