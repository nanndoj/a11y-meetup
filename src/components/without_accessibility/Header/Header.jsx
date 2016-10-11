import React from 'react';

/*
	Using HTML Heading tags is a good practice for web semantics but this kind elements can not receive focus.
	The screen readers will not consider this element
 */
const Header = ({ children }) => (
	<h3>{ children }</h3>
);

export default Header;