import { API_URL, API_KEY } from "../services/settings";

export default function getGifs({ keyword, limit = 25, page = 0 } = {}) {
    //const limit = 25;
    //const page = 1;
    const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${
        page * limit
    }&rating=G&lang=en`;

    return fetch(apiURL)
        .then((res) => res.json())
        .then((response) => {
            const { data = [] } = response;
            const gifs = data.map((item) => {
                const { images, id, title } = item;
                const { url } = images.fixed_height_small;
                return { url, id, title };
            });

            console.log(gifs);
            return gifs;
        });
}
