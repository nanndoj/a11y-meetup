export const TOGGLE_ACCESSIBILITY = "TOGGLE_ACCESSIBILITY";
export const OPEN_MENU = "OPEN_MENU";
export const CLOSE_MENU = "CLOSE_MENU";

export const toggleAccessibility = () => ({
	type: TOGGLE_ACCESSIBILITY
});

export const openMenu = () => ({
	type: OPEN_MENU
});

export const closeMenu = () => ({
	type: CLOSE_MENU
});