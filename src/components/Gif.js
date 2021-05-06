import React from "react";
import "./Gif.css";

const Gif = ({ title, id = "", url }) => {
    return (
        <div className="gif-content">
            <img className="gif-item" src={url} alt={title} key={id} />
        </div>
    );
};

export default Gif;
