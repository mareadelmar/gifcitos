import React from "react";
import "./Fav.css";

const Fav = ({ id }) => {
    console.log(id);

    const handleFav = () => {
        console.log("agregar a favoritos");
    };

    return (
        <button onClick={handleFav}>
            <span aria-label="Fav this Gif" role="img"></span>
        </button>
    );
};

export default Fav;
