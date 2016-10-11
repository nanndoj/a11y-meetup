import * as actions from './actions';

const DEFAULT_STATE = {
	isAccessibilityEnabled: false,
	isMenuOpen: false
};

const reducer = (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case actions.TOGGLE_ACCESSIBILITY:
			return {
				...state,
				isAccessibilityEnabled: !state.isAccessibilityEnabled
			};
		case actions.OPEN_MENU:
			return {
				...state,
				isMenuOpen: true
			};
		case actions.CLOSE_MENU:
			return {
				...state,
				isMenuOpen: false
			};
		default:
			return state;
	}
};

export default reducer;
