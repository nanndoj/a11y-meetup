import React, { PropTypes } from 'react';

/*
 All input fields need to have a label and the label is linked to the form field using the id attribute.
 The screen reader will not be able to get any descriptive information about this element
 */
const Checkbox = ({ checked, onClick, children }) => (
	<div>
		<input
			type="checkbox"
			onChange={ onClick }
			checked={ checked }
		/>
		{ children }
	</div>
);

Checkbox.propTypes = {
	checked: PropTypes.bool,
	onClick: PropTypes.func
};

export default Checkbox;