import React, { PropTypes } from 'react';

/*
 This is an accessible checkbox.
 - The checkbox has an id prop
 - There's a label element making reference to the checkbox using htmlFor prop
 - The checkbox has an aria-labelledby prop pointing to its label
 */
const Checkbox = ({ id, checked, onClick, children }) => (
	<div>
		<input
			type="checkbox"
			id={ id }
			onChange={ onClick }
			checked={ checked }
			aria-labelledby={`label_${id}`}
		/>
		<label id={`label_${id}`} htmlFor={ id }>{ children }</label>
	</div>
);

Checkbox.propTypes = {
	id: PropTypes.string.isRequired,
	checked: PropTypes.bool,
	onClick: PropTypes.func
};

export default Checkbox;