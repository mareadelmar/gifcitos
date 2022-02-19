import React from "react";
import { Redirect } from "wouter";
import "./PageDetails.css";
import useSingleGif from "../hooks/useSingleGif";
import Gif from "../components/Gif";
import { Helmet } from "react-helmet";

const PageDetails = ({ params }) => {
	const { id } = params;
	const { gif, loadingGif, isError } = useSingleGif({ id });

	if (loadingGif)
		return (
			<>
				<Helmet>
					<title>GIFCITOS | Cargando...</title>
				</Helmet>
			</>
		);
	if (isError) return <Redirect to='/404' />;
	if (!gif) return null;

	const title = `GIFCITOS | ${gif.title}`;

	return (
		<>
			<Helmet>
				<title>{title}</title>
				<meta name='description' content={title} />
			</Helmet>
			<div className='details-gif'>
				<Gif {...gif} />
			</div>
		</>
	);
};

export default PageDetails;
