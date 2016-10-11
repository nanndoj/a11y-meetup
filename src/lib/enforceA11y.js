/*
 This is one example on how can we enforce some patterns by analyzing the creation of
 elements in React. We are intercepting React.createElement to make some accessibility assertions
 when the elements are created
 */

const checkA11y = (type, props) => {
	// We have access to the type and the props. We just need to check if the elements
	// are compliant with the standards
	if(type === 'img' && !props.alt)
		console.warn('Please add an alt tag to your images.');

};

const enforceA11y = (_React) => {
	const _createElement = _React.createElement;

	_React.createElement = (type, props, ...children) => {

		// Call our assertion function
		checkA11y(type, props, ...children);

		return _createElement(type, props, ...children);
	}
};

export default enforceAccessibility;