const { REACT_APP_API_URL, REACT_APP_API_KEY } = process.env;

export default function getTrendings() {
	const apiURL = `${REACT_APP_API_URL}/trending/searches?api_key=${REACT_APP_API_KEY}`;

	return fetch(apiURL)
		.then(res => res.json())
		.then(response => {
			const { data } = response;
			return data;
		});
}
