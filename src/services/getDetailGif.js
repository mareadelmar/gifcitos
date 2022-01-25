const { REACT_APP_API_URL, REACT_APP_API_KEY } = process.env;

export default function getDetailGif({ id }) {
	const apiURL = `${REACT_APP_API_URL}/gifs/${id}?api_key=${REACT_APP_API_KEY}`;
	return fetch(apiURL)
		.then(res => res.json())
		.then(response => {
			const { data } = response;
			const { images, id, title } = data;
			const { url } = images.fixed_height_small;

			return { url, id, title };
		});
}
