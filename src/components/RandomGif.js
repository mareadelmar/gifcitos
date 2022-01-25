import React, { useEffect, useState } from "react";
import "./RandomGif.css";
import getRandom from "../services/getRandom";
import Gif from "./Gif";

const RandomGif = () => {
	const [randomGif, setRandomGif] = useState({});

	useEffect(() => {
		getRandom().then(random => {
			//const { url, title } = random;
			setRandomGif(random);
		});
	}, []);

	return (
		<div className='random-gif'>
			<Gif url={randomGif.url} title={randomGif.title} />
		</div>
	);
};

export default RandomGif;
