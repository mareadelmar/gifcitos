import React, { useEffect, useState } from "react";
import "./RandomGif.css";
import getRandom from "../services/getRandom";
import Gif from "./Gif";
import Spinner from "../components/Spinner";

const RandomGif = () => {
    const [loading, setLoading] = useState(false);
    const [randomGif, setRandomGif] = useState({});
    useEffect(() => {
        setLoading(true);
        getRandom().then((random) => {
            const { url, title } = random;
            setRandomGif(random);
            setLoading(false);
        });
    }, []);

    return (
        <div className="random-gif">
            {loading ? (
                <Spinner />
            ) : (
                <Gif url={randomGif.url} title={randomGif.title} />
            )}
        </div>
    );
};

export default RandomGif;
