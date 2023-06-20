export const addAllOfThisToWindow = {
	add: (a: number, b: number) => a + b,
	subtract: (a: number, b: number) => a - b,
	multiply: (a: number, b: number) => a * b,
	divide: (a: number, b: number) => a / b,
};

Object.assign(window, addAllOfThisToWindow);

declare global {
	type AddAllOfThisToWindow = typeof addAllOfThisToWindow;
	interface Window extends AddAllOfThisToWindow {}
}

console.log(typeof window.add);
console.log(typeof window.subtract);
console.log(typeof window.multiply);
console.log(typeof window.divide);
