function typedObjectKeys<Object extends object>(obj: Object) {
	return Object.keys(obj) as Array<keyof Object>;
}

// Or:

// function typedObjectKeys<Key extends string>(obj: Record<Key, any>) {
// 	return Object.keys(obj) as Array<Key>;
// }

const result1 = typedObjectKeys({
	a: 1,
	b: 2,
});
