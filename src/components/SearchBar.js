import React, { useState } from "react";
import "./SearchBar.css";
import { useLocation } from "wouter";

const SearchBar = () => {
    const [keyword, setKeyword] = useState();
    const [path, pushLocation] = useLocation();

    const handleSubmit = (e) => {
        e.preventDefault();
        // mandar a otra ruta: mandamos parámetro keyword a ListGifs
        pushLocation(`/search/${keyword}`);
        console.log(keyword);
    };

    const handleInput = (e) => {
        setKeyword(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="search"
                onChange={handleInput}
                type="text"
                value={keyword}
                placeholder="Buscar gif..."
            />
            <button className="search-btn">buscar</button>
        </form>
    );
};

export default SearchBar;
