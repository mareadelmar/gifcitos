const { REACT_APP_API_URL, REACT_APP_API_KEY } = process.env;

export default function getTrendings() {
	//const limit = 20;
	const apiURL = `${REACT_APP_API_URL}/gifs/trending?api_key=${REACT_APP_API_KEY}&limit=20`;

	return fetch(apiURL)
		.then(res => res.json())
		.then(response => {
			const { data } = response;
			const trendingGifs = data.map(item => {
				const { images, id, title } = item;
				const { url } = images.fixed_height_small;
				return { url, id, title };
			});
			return trendingGifs;
		});
}
