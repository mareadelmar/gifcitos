import React, { useState } from "react";
import { API_URL, API_KEY } from "../services/settings";
import ListGifs from "../components/ListGifs";
import { useGifs } from "../hooks/useGifs";

const PageResults = ({ params }) => {
    const { keyword } = params;
    const apiURL = `${API_URL}/search?api_key=${API_KEY}&q=${keyword}&limit=20&offset=0&rating=G&lang=en`;
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

export default PageResults;
