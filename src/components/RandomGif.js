import React from "react";
import "./RandomGif.css";
import { useGifs } from "../hooks/useGifs";
import { API_URL, API_KEY } from "../services/settings";
import Gif from "./Gif";

const RandomGif = () => {
    const apiURL = `${API_URL}/random?api_key=${API_KEY}&tag=&rating=g`;
    const { gifs, loading } = useGifs({ apiURL });
    const { url, title } = gifs;

    return (
        <div className="random-gif">
            {loading ? (
                <i className="loading">Cargando...</i>
            ) : (
                <Gif url={url} title={title} />
            )}
        </div>
    );
};

export default RandomGif;
