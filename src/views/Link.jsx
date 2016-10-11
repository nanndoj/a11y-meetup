/* eslint-disable */
import React from 'react';
import { browserHistory } from 'react-router';

import './Link.scss';

const LinkView = (props) => (
	<a
		className="link"
	   	onClick={ () => browserHistory.push('/examples') }
	>
		Go to Home Page
	</a>
);

export default LinkView;