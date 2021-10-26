import React from "react";
import Gif from "./Gif";
import "./ListGifs.css";

const ListGifs = ({ gifs }) => {
	return gifs.map(({ id, url, title }) => (
		<Gif key={id} url={url} title={title} id={id} />
	));
};

export default ListGifs;
