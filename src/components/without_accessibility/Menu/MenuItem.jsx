import React, { PropTypes } from 'react';

import cx from 'classnames';
import './MenuItem.scss';
import Link from './../Link';

const MenuItem = ({ history, icon, href, children }) => (
	<li className={ cx({ 'menu-item': true, [icon] : true }) }>
		<Link href={ href }>{ children }</Link>
	</li>
);

MenuItem.propTypes = {
	icon: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired
};

export default MenuItem;