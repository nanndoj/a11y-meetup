/* eslint-disable */
import React from 'react';
import './Table.scss';

const users = [
	{ id: 54, name: 'Malachi Bram' },
	{ id: 75, name: 'Friedhelm Orel' },
	{ id: 91, name: 'Fernando Santos' },
	{ id: 59, name: 'Judit Rosalia' }
];

const remove = () => alert('removed');

const TableView = () => (
	<table className="table">
		<thead>
			<tr className="row header">
				<td>Name</td>
				<td>Action</td>
			</tr>
		</thead>
		<tbody>
		{ users.map(user => (
			<tr key={ user.id } className="row">
				<td>{ user.name }</td>
				<td>
					<button
						className="btn"
						onClick={ remove }
						aria-label="Delete user"
					>
						X
					</button>
				</td>

			</tr>
		))}
		</tbody>

	</table>
);

export default TableView;