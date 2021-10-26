import React from "react";
import { Link } from "wouter";
import "./Gif.css";

const Gif = ({ title, id = "", url }) => {
	return (
		<Link to={`/gif/${id}`} className='gif-link'>
			<img
				className='gif-item'
				src={url}
				alt={title}
				key={id}
				loading='lazy'
			/>
		</Link>
	);
};

export default React.memo(Gif);
//export default Gif;
