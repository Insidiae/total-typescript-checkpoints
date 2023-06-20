interface Fruit {
	name: string;
	price: number;
}

// export const wrapFruit = <const TFruit extends { name: string }>(
// 	fruits: TFruit[]
// ) => {
// 	const getFruit = <TName extends TFruit["name"]>(name: TName) => {
// 		return fruits.find((fruit) => fruit.name === name) as Extract<
// 			TFruit,
// 			{ name: TName }
// 		>;
// 	};

// 	return {
// 		getFruit,
// 	};
// };

// Or:

export const wrapFruit = <const TFruits extends readonly Fruit[]>(
	fruits: TFruits
) => {
	const getFruit = <TName extends TFruits[number]["name"]>(name: TName) => {
		return fruits.find((fruit) => fruit.name === name) as Extract<
			TFruits[number],
			{ name: TName }
		>;
	};

	return {
		getFruit,
	};
};

const fruits = wrapFruit([
	{
		name: "apple",
		price: 1,
	},
	{
		name: "banana",
		price: 2,
	},
]);

const banana = fruits.getFruit("banana");
const apple = fruits.getFruit("apple");
// @ts-expect-error
const notAllowed = fruits.getFruit("not-allowed");
