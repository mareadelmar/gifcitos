import React, { useEffect, useState } from "react";
import getTrendingsGifs from "../services/getTrendingsGifs";
import ListGifs from "./ListGifs";
import Spinner from "../components/Spinner";

const TrendingGifs = () => {
	const [trendingGifs, setTredingGifs] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		getTrendingsGifs().then(gifs => {
			setTredingGifs(gifs);
			setLoading(false);
		});
	}, []);
	return (
		<>
			{loading && <Spinner />}
			{trendingGifs && (
				<div className='gifs-container'>
					<ListGifs gifs={trendingGifs} />
				</div>
			)}
		</>
	);
};

export default TrendingGifs;
