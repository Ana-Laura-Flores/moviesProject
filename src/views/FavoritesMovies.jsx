import { useContext } from "react";
import { FavoriteContext } from "../context/FavoriteContext";
import ContainCards from "../components/ContainCards";

export default function FavoritesMovies() {
    const { allFavorits } = useContext(FavoriteContext);
    return (
        <div>
            {allFavorits ? <ContainCards data={allFavorits} /> : "No hay pelis"}
        </div>
    );
}
