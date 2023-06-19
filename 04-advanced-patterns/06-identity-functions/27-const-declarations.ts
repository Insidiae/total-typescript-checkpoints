export const asConst = <const T>(t: T) => t;

const fruits = asConst([
	{
		name: "apple",
		price: 1,
	},
	{
		name: "banana",
		price: 2,
	},
]);
