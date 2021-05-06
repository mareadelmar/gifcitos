import React, { useState, useEffect } from "react";
import getGifs from "../services/getGifs";

export function useGifs({ apiURL }) {
    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(
        function () {
            setLoading(true);
            getGifs({ apiURL }).then((gifs) => {
                setGifs(gifs);
                setLoading(false);
            });
        },
        [apiURL]
    );

    return { gifs, loading };
}
