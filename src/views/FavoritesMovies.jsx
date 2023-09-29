import { useContext } from "react";
import { FavoriteContext } from "../context/FavoriteContext";
import ContainCards from "../components/ContainCards";
import ErrorDisplay from "../components/ErrorDisplay";
import { Box } from "@mui/material";

export default function FavoritesMovies() {
    const { allFavorits } = useContext(FavoriteContext);
    return (
        <Box>
            {allFavorits.length ? (
                <ContainCards data={allFavorits} />
            ) : (
                <ErrorDisplay />
            )}
        </Box>
    );
}
