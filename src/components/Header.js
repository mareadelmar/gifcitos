import React from "react";
import { Link } from "wouter";
import "./Header.css";
import useUser from "../hooks/useUser";

const Header = () => {
	const { isLogged, logout } = useUser();

	return (
		<section className='flex header-container'>
			<div className='flex header-app'>
				<Link to='/'>
					<img
						src='https://media.giphy.com/media/2si39FySvMsPwVsmSQ/giphy.gif'
						alt='gif logo'
						className='header-logo'
					/>
				</Link>
				<h1 className='header-title'>GUIFCITOS</h1>
			</div>
			{/* <div className="flex header-auth">
                {isLogged ? (
                    <button onClick={logout}>Logout</button>
                ) : (
                    <Link to="/login" className="auth-link">
                        login
                    </Link>
                )}
            </div> */}
		</section>
	);
};

export default Header;
