import React from "react";
import "./PageResults.css";
import ListGifs from "../components/ListGifs";
import Spinner from "../components/Spinner";
import { useGifs } from "../hooks/useGifs";
import { Helmet } from "react-helmet";

const PageResults = ({ params }) => {
	const { keyword } = params;
	const { gifs, loading, setPage } = useGifs({ keyword });

	const title = `GIFCITOS | Resultados para ${decodeURI(keyword)}`;

	const handleClickPage = () => {
		setPage(prevPage => prevPage + 1);
	};

	return (
		<>
			<Helmet>
				<title>{title}</title>
				<meta name='description' content={title} />
			</Helmet>
			<section className='results-container'>
				{loading ? (
					<div className='results-spinner'>
						<Spinner />
					</div>
				) : (
					<div>
						<div className='gifs-container'>
							<ListGifs gifs={gifs} />
						</div>
						<div className='results-btn'>
							<button onClick={handleClickPage}>
								Cargas más
							</button>
						</div>
					</div>
				)}
			</section>
		</>
	);
};

export default PageResults;
