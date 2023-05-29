interface Attributes {
	firstName: string;
	lastName: string;
	age: number;
}

type AttributeGetters = {
	[Key in keyof Attributes]: () => Attributes[Key];
};
