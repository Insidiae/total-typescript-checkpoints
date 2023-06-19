export function makeEventHandlers<TObj>(obj: {
	[K in keyof TObj]: (arg: K) => void;
}) {
	return obj;
}

const obj = makeEventHandlers({
	click: (name) => {
		console.log(name);
	},
	focus: (name) => {
		console.log(name);
	},
});
