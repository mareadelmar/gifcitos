import { API_URL, API_KEY } from "../services/settings";

export default function getTrendings() {
    const apiURL = `${API_URL}/trending/searches?api_key=${API_KEY}`;

    //"https://api.giphy.com/v1/trending/searches?api_key=zxtQAmD7d5Q8UMos72KawixxrXeUjxPA";
    //`${API_URL}/trending/searches?api_key=${API_KEY}`;

    return fetch(apiURL)
        .then((res) => res.json())
        .then((response) => {
            const { data } = response;
            console.log(response.data, data);
            return data;
        });
}
