import React from "react";
import { Link } from "wouter";
//import logo from "../logo.svg";
import "./Header.css";

const Header = () => {
    return (
        <section className="header-content">
            <Link to="/">
                <img
                    src="https://media.giphy.com/media/2si39FySvMsPwVsmSQ/giphy.gif"
                    alt=""
                    className="logo"
                />
            </Link>
            <h1>GUIFCITOS</h1>
        </section>
    );
};

export default Header;
