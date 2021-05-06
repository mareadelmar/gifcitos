import React from "react";
import { useGifs } from "../hooks/useGifs";
import { API_URL, API_KEY } from "../services/settings";
import ListGifs from "./ListGifs";

const TrendingGifs = () => {
    const apiURL = `${API_URL}/trending?api_key=${API_KEY}&limit=20`;
    const { gifs, loading } = useGifs({ apiURL });

    return (
        <>
            {loading ? (
                <i className="loading">Cargando...</i>
            ) : (
                <div className="gifs-container">
                    <ListGifs gifs={gifs} />
                </div>
            )}
        </>
    );
};

export default TrendingGifs;
