import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import "./HomePage.css";
import RandomGif from "../components/RandomGif";
import TrendingGifs from "../components/TrendingGifs";
import SearchBar from "../components/SearchBar";

const HomePage = () => {
    const [keyword, setKeyword] = useState();
    const [path, pushLocation] = useLocation();

    const handleSubmit = (e) => {
        e.preventDefault();
        pushLocation(`/search/${keyword}`);
    };

    const handleInput = (e) => {
        setKeyword(e.target.value);
    };
    return (
        <section className="home-container">
            <SearchBar
                keyword={keyword}
                onSubmit={handleSubmit}
                onChange={handleInput}
            />
            <div className="links-container">
                <Link to="/search/panda">Gifs de pandas</Link>
                <Link to="/search/the-nanny">Gifs de La Niñera</Link>
                <Link to="/search/rick-and-morty">Gifs de Rick and Morty</Link>
            </div>
            <div className="random-container">
                <h3 className="gifs-title">Para empezar, uno random:</h3>
                <RandomGif />
            </div>
            <div className="trending-container">
                <h3 className="gifs-title">Trendings:</h3>
                <TrendingGifs />
            </div>
        </section>
    );
};

export default HomePage;
