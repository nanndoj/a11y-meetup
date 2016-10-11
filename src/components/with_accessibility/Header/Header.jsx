import React from 'react';

/*
 By adding a tabIndex property we make this component focusable.
 The screen readers will stop by and read the content of this element
 */
const Header = ({ children }) => (
	<h3 tabIndex="0">{ children }</h3>
);

export default Header;