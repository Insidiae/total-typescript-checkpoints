/**
 * Clues:
 *
 * 1. declare global will be needed:
 *
 * declare global {}
 *
 * 2. myFunc will need to be added to the global scope using 'function':
 *
 * function myFunc(): boolean
 *
 * 3. myVar will need to be added to the global scope using 'var':
 *
 * var myVar: number
 */
declare global {
	function myFunc(): boolean;
	var myVar: number;
}

globalThis.myFunc = () => true;
globalThis.myVar = 1;

//? Suppress module declaration error
export {};
