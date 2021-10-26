import { API_URL, API_KEY } from "../services/settings";

export default function getTrendings() {
    const apiURL = `${API_URL}/trending/searches?api_key=${API_KEY}`;

    return fetch(apiURL)
        .then((res) => res.json())
        .then((response) => {
            const { data } = response;
            console.log(response.data, data);
            return data;
        });
}
