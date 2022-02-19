import { useState, useEffect } from "react";
import { useGifs } from "./useGifs";
import getDetailGif from "../services/getDetailGif";

export default function useSingleGif({ id }) {
	const { gifs } = useGifs();
	const [loadingGif, setLoadingGif] = useState(false);
	const [isError, setIsError] = useState(false);

	const findGif = gifs.find(oneGif => oneGif.id === id);
	const [gif, setGif] = useState(findGif);

	// llamamos al efecto si no hay gifs en caché
	//(si no la url del detalle solo funciona cuando entramos desde pageResult)
	useEffect(() => {
		if (!gif) {
			setLoadingGif(true);
			getDetailGif({ id })
				.then(gif => {
					setGif(gif);
					setIsError(false);
					setLoadingGif(false);
				})
				.catch(err => {
					setLoadingGif(false);
					setIsError(true);
				});
		}
	}, [id, gif]);

	return { gif, loadingGif, isError };
}
