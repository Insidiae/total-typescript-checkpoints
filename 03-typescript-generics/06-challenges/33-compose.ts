export function compose<TInput, TF1, TF2>(
	func1: (input: TInput) => TF1,
	func2: (input: TF1) => TF2
): (input: TInput) => TF2;
export function compose<TInput, TF1, TF2, TF3>(
	func1: (input: TInput) => TF1,
	func2: (input: TF1) => TF2,
	func3: (input: TF2) => TF3
): (input: TInput) => TF3;
export function compose<TInput, TF1, TF2, TF3, TF4>(
	func1: (input: TInput) => TF1,
	func2: (input: TF1) => TF2,
	func3: (input: TF2) => TF3,
	func4: (input: TF3) => TF4
): (input: TInput) => TF4;
export function compose<TInput, TF1, TF2, TF3, TF4, TF5>(
	func1: (input: TInput) => TF1,
	func2: (input: TF1) => TF2,
	func3: (input: TF2) => TF3,
	func4: (input: TF3) => TF4,
	func5: (input: TF4) => TF5
): (input: TInput) => TF5;
export function compose(...funcs: Array<(input: any) => any>) {
	return (input: any) => {
		return funcs.reduce((acc, fn) => fn(acc), input);
	};
}

const addOne = (num: number) => {
	return num + 1;
};

const addTwoAndStringify = compose(addOne, addOne, String);

const result = addTwoAndStringify(4);

const stringifyThenAddOne = compose(
	// addOne takes in a number - so it shouldn't be allowed after
	// a function that returns a string!
	// @ts-expect-error
	String,
	addOne
);
