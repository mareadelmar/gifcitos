import { API_URL, API_KEY } from "../services/settings";

export default function getTrendings() {
    const limit = 20;
    const apiURL = `${API_URL}/gifs/trending?api_key=${API_KEY}&limit=20`;

    return fetch(apiURL)
        .then((res) => res.json())
        .then((response) => {
            const { data } = response;
            console.log(data);
            const trendingGifs = data.map((item) => {
                const { images, id, title } = item;
                const { url } = images.fixed_height_small;
                return { url, id, title };
            });
            console.log(trendingGifs);
            return trendingGifs;
        });
}
