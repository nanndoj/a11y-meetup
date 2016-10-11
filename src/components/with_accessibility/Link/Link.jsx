import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';

/*
 Here is a accessible link. To be considered a real link it must have an href prop.
 In this case we are prevent the default action (page refresh) to be triggered using Event.preventDefault()
 */

const handleLinkClick = e => {
	e.preventDefault();
	browserHistory.push(e.target.getAttribute('href'));
};

const Link = ({ href, children }) => (
	<a href={ href } onClick={ handleLinkClick }>{ children }</a>
);

Link.propTypes = {
	href: PropTypes.string
};

export default Link;