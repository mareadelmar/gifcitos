import React from "react";
import { Link } from "wouter";
import "./Header.css";
//import useUser from "../hooks/useUser";

const Header = () => {
	//const { isLogged, logout } = useUser();

	return (
		<section className='flex header-container'>
			<Link to='/' className='header-app'>
				<img
					src='https://media.giphy.com/media/2si39FySvMsPwVsmSQ/giphy.gif'
					alt='gif logo'
					className='header-logo'
				/>
				<h1 className='header-title'>GUIFCITOS</h1>
			</Link>
		</section>
	);
};

export default Header;
