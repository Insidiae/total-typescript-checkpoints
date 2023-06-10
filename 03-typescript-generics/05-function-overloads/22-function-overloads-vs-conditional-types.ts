/**
 * This time, let's try and solve this one
 * with function overloads too!
 */
export function youSayGoodbyeISayHello(greeting: "goodbye"): "hello";
export function youSayGoodbyeISayHello(greeting: "hello"): "goodbye";
export function youSayGoodbyeISayHello(greeting: "goodbye" | "hello") {
	return greeting === "goodbye" ? "hello" : "goodbye";
}

const goodbye = youSayGoodbyeISayHello("hello");
const hello = youSayGoodbyeISayHello("goodbye");
