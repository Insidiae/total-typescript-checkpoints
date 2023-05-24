/**
 * How do we type onFocusChange?
 */
type FocusListener = (isFocused: boolean) => void;

const addListener = (onFocusChange: FocusListener) => {
	window.addEventListener("focus", () => {
		onFocusChange(true);
	});

	window.addEventListener("blur", () => {
		onFocusChange(false);
	});
};
