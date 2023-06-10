//* Using Function Overloads:
// function runGenerator<T>(generator: () => T): T;
// function runGenerator<T>(generator: { run: () => T }): T;
//* Using Union Types:
function runGenerator<T>(generator: (() => T) | { run: () => T }) {
	if (typeof generator === "function") {
		return generator();
	}
	return generator.run();
}

//? Notice that everything still works correctly
//? even when you comment out the function overloads!
const result1 = runGenerator({
	run: () => "hello",
});

const result2 = runGenerator(() => "hello");
