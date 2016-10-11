/* eslint-disable */
import React from 'react';
import './Span.scss';
import TrumpIpsum from './TrumpIpsum.jsx';

/*
  Where possible, it is recommended to use native HTML buttons (<button>, <input type="button" /> and
  <input type="image" />) rather than the another elements, as native HTML buttons are more widely supported by older
  user agents and assistive technology. Native HTML buttons also support keyboard and focus requirements by default,
  without need for additional customization.
 */
const SpanView = () => (
	<div>
		<TrumpIpsum />
		<p>
			You can
			<span
				onClick={ handleClick }
				className="tip"
			>
				click here
			</span>
			for more information
		</p>
	</div>
);

const handleClick = () => {
	alert('clicked');
};

export default SpanView;