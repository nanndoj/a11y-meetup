import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';

/*
 Links must have a non-empty href attribute in order to be considered true links and to be accessible to keyboard users.
 */
const Link = ({ href, children }) => (
	<a onClick={ () => browserHistory.push(href) }>{ children }</a>
);

Link.propTypes = {
	href: PropTypes.string
};

export default Link;