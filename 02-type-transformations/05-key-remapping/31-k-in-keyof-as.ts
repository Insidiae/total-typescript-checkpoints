interface Attributes {
	firstName: string;
	lastName: string;
	age: number;
}

type AttributeGetters = {
	[Key in keyof Attributes as `get${Capitalize<Key>}`]: () => Attributes[Key];
};
