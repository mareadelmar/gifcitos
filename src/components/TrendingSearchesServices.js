import React, { useEffect, useState } from "react";
import getTrendings from "../services/getTrendings";
import { Link } from "wouter";

const TrendingSearchesServices = () => {
	const [trendingTerms, setTrendingTerms] = useState([]);

	useEffect(() => {
		getTrendings().then(data => {
			setTrendingTerms(data);
		});
	}, []);

	return (
		<>
			{trendingTerms &&
				trendingTerms.map(item => {
					const k = Date.now();
					return (
						<Link to={`/search/${item}`} key={k}>
							{item}
						</Link>
					);
				})}
		</>
	);
};
//export default React.memo(TrendingSearchesServices);
export default TrendingSearchesServices;
