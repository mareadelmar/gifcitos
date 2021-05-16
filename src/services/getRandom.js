import { API_URL, API_KEY } from "../services/settings";

export default function getRandom() {
    const apiURL = `${API_URL}/gifs/random?api_key=${API_KEY}&tag=&rating=g`;

    return fetch(apiURL)
        .then((res) => {
            console.log(res);
            return res.json();
        })
        .then((response) => {
            console.log(response.data);
            const { data } = response;
            const { fixed_height_downsampled_url, title } = data;
            const gifRandom = {
                url: fixed_height_downsampled_url,
                title,
            };
            console.log(gifRandom);
            return gifRandom;
        });
}
