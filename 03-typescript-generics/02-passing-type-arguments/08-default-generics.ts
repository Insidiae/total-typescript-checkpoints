export function createSet<T = string>() {
	return new Set<T>();
}

const numberSet = createSet<number>();
const stringSet = createSet<string>();
const otherStringSet = createSet();
