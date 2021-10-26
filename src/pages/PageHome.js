import React from "react";
import "./PageHome.css";
import TrendingSearches from "../components/TrendingSearches";
import RandomGif from "../components/RandomGif";
import TrendingGifs from "../components/TrendingGifs";
import { Helmet } from "react-helmet";

const HomePage = () => {
	const title = "GIFCITOS | Buscador de Gifs";
	return (
		<>
			<Helmet>
				<title>{title}</title>
				<meta name='description' content={title} />
			</Helmet>
			<section className='home-container'>
				<div className='random-container'>
					<RandomGif />
				</div>
				<div className='trending-container'>
					<h3 className='gifs-title'>↗ tendencias</h3>
					<TrendingGifs />
				</div>
				<TrendingSearches />
			</section>
		</>
	);
};

export default HomePage;
