import React from "react";
import { Link } from "wouter";
import "./Gif.css";

const Gif = ({ title, id = "", url }) => {
    return (
        // <div className="gif-content"></div>

        <Link to={`/gif/${id}`}>
            <img className="gif-item" src={url} alt={title} key={id} />
        </Link>
    );
};

export default React.memo(Gif);
//export default Gif;
