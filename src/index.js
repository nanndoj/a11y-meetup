import React from 'react';

import a11y from 'react-a11y';
a11y(React);

import ReactDOM from 'react-dom';
import './index.scss';

import App from './App';
import Main from './views/Main';
import Lobby from './views/Lobby';
import Link from './views/Link';
import Image from './views/Image';
import Span from './views/Span';
import Table from './views/Table';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './store';

import { Router, Route, browserHistory, IndexRoute, IndexRedirect } from 'react-router'

let store = createStore(reducer, window.devToolsExtension && window.devToolsExtension());

ReactDOM.render(
	<Provider store={store}>
		<Router history={ browserHistory }>
			<Route path="/" component={ App }>
				<IndexRedirect to="examples" />
				<Route path="examples" component={ Main }>
					<IndexRoute component={ Lobby }/>
					<Route path="link" component={ Link }/>
					<Route path="image" component={ Image }/>
					<Route path="span" component={ Span }/>
					<Route path="Table" component={ Table }/>
				</Route>
			</Route>
		</Router>
	</Provider>,
  	document.getElementById('root')
);
