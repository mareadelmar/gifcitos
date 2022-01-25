import React, { useState } from "react";
import "./SearchBar.css";
import { useLocation } from "wouter";

const SearchBar = () => {
	const [keyword, setKeyword] = useState();
	const [, pushLocation] = useLocation();

	const handleSubmit = e => {
		e.preventDefault();
		pushLocation(`/search/${keyword}`);
	};

	const handleInput = e => {
		setKeyword(e.target.value);
	};

	return (
		<form onSubmit={handleSubmit} className='search-bar'>
			<input
				className='search'
				onChange={handleInput}
				type='text'
				value={keyword}
				placeholder='Buscar gif...'
			/>
			<button className='search-btn'>buscar</button>
		</form>
	);
};

export default SearchBar;
