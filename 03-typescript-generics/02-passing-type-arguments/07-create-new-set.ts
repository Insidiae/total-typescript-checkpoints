export function createSet<DataType>() {
	return new Set<DataType>();
}

const stringSet = createSet<string>();
const numberSet = createSet<number>();
const unknownSet = createSet();
