import { API_URL, API_KEY } from "../services/settings";

export default function getDetailGif({ id }) {
    console.log(id);
    const apiURL = `${API_URL}/gifs/${id}?api_key=${API_KEY}`;
    console.log(apiURL, id, "desde getDetailGif");
    return fetch(apiURL)
        .then((res) => res.json())
        .then((response) => {
            const { data } = response;
            console.log(data, apiURL);
            const { images, id, title } = data;
            const { url } = images.fixed_height_small;

            return { url, id, title };
        });
}
