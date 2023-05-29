interface FruitMap {
	apple: "red";
	banana: "yellow";
	orange: "orange";
}

type TransformedFruit = {
	[Fruit in keyof FruitMap]: `${Fruit}:${FruitMap[Fruit]}`;
}[keyof FruitMap];
