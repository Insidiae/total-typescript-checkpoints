/**
 * Clues:
 *
 * 1. You'll need declare global again
 *
 * 2. Inside declare global, you'll need to modify the Window
 * interface to add a makeGreeting function
 */
declare global {
	interface Window {
		makeGreeting(): string;
	}
}

window.makeGreeting = () => "Hello!";

//? Suppress module declaration error
export {};
