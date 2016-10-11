/* eslint-disable */
import React from 'react';

/*
 All image elements must have an alt property prop. And they are also not focusable by default.
 */
const ImageView = () => (
	<img
		onClick={ handleClick }
		src="http://i.giphy.com/2vlC9FMLSmqGs.gif"
	/>
);

const handleClick = () => {
	alert('clicked');
};

export default ImageView;