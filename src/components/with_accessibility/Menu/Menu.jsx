import React, { PropTypes } from 'react';

import cx from 'classnames';
import './Menu.scss';
import MenuItem from './MenuItem';

const Menu = ({ open, onMouseOver, onMouseLeave, children }) => (
	<div>
		<ul
			className={ cx({ menu: true, open }) }
			onMouseOver={ onMouseOver }
			onMouseLeave={ onMouseLeave }
		>
			{ children }
		</ul>
	</div>
);

Menu.propTypes = {
	open: PropTypes.bool,
	mouseOver: PropTypes.func,
	mouseLeave: PropTypes.func,
	children: PropTypes.arrayOf(MenuItem)
};

Menu.defaultProps = {
	open: false
};

export default Menu;
export { MenuItem };