type Person = {
	name: string;
	age: number;
	birthdate: Date;
};

export function remapPerson<Key extends keyof Person, Value = Person[Key]>(
	key: Key,
	value: Person[Key]
): Person[Key] {
	if (key === "birthdate") {
		return new Date() as Person[Key];
	}

	return value;
}

const date = remapPerson("birthdate", new Date());
const num = remapPerson("age", 42);
const name = remapPerson("name", "John Doe");
