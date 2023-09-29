import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import useMovies from "../customHooks/useMovies";

export default function TrailerViewer({ id }) {
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;
    const [player, setPlayer] = useState(null);
    const { getData, data } = useMovies([]);

    useEffect(() => {
        getData(
            `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`
        );
    }, []);

    const opts = {
        height: "500",
        width: "95%",
        playerVars: {
            autoplay: 1,
        },
    };

    const onReady = (event) => {
        setPlayer(event.target);
    };

    return (
        <div>
            {data.results ? (
                <YouTube
                    videoId={data.results[0].key}
                    opts={opts}
                    onReady={onReady}
                />
            ) : (
                <div>No hay tráiler disponible.</div>
            )}
        </div>
    );
}
