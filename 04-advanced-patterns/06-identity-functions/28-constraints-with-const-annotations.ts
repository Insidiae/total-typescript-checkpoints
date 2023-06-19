export const narrowFruits = <
	const TFruits extends ReadonlyArray<{ name: string; price: number }>
>(
	t: TFruits
) => t;

const fruits = narrowFruits([
	{
		name: "apple",
		price: 1,
	},
	{
		name: "banana",
		price: 2,
	},
]);

// Should ONLY let you pass an array of fruits
const notAllowed = narrowFruits([
	// @ts-expect-error
	"not allowed",
]);
