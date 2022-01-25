const { REACT_APP_API_URL, REACT_APP_API_KEY } = process.env;

export default function getGifs({ keyword, limit = 25, page = 0 } = {}) {
	//const limit = 25;
	//const page = 1;
	const apiURL = `${REACT_APP_API_URL}/gifs/search?api_key=${REACT_APP_API_KEY}&q=${keyword}&limit=${limit}&offset=${
		page * limit
	}&rating=G&lang=en`;

	return fetch(apiURL)
		.then(res => res.json())
		.then(response => {
			const { data = [] } = response;
			const gifs = data.map(item => {
				const { images, id, title } = item;
				const { url } = images.fixed_height_small;
				return { url, id, title };
			});

			return gifs;
		});
}
