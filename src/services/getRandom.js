const { REACT_APP_API_URL, REACT_APP_API_KEY } = process.env;

export default function getRandom() {
	const apiURL = `${REACT_APP_API_URL}/gifs/random?api_key=${REACT_APP_API_KEY}&rating=g`;

	return fetch(apiURL)
		.then(res => {
			return res.json();
		})
		.then(response => {
			// cambiaron las urls que trae de opción
			const { data } = response;
			const { title, images } = data;
			const { fixed_height_downsampled } = images;

			const gifRandom = {
				url: fixed_height_downsampled.url,
				title,
			};
			return gifRandom;
		});
}
