export default function getGifs({ apiURL }) {
    return fetch(apiURL)
        .then((res) => res.json())
        .then((response) => {
            const { data } = response;

            if (Array.isArray(data)) {
                const gifs = data.map((item) => {
                    const { images, id, title } = item;
                    const { url } = images.fixed_height_small;
                    return { url, id, title };
                });
                return gifs;
            }
            if (Object.prototype.toString.call(data) === "[object Object]") {
                console.log(data);
                const { fixed_height_downsampled_url, title } = data;
                const gifs = {
                    url: fixed_height_downsampled_url,
                    title,
                };
                return gifs;
            }
        });
}
