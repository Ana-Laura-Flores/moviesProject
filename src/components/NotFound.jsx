import { Box } from "@mui/system";
import React from "react";
import notFound from "../assets/img/not-data.jpg";

export default function NotFound() {
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
            <img src={notFound} style={{ width: "60%", minWidth:"60%"}} alt="" />
        </Box>
    );
}
