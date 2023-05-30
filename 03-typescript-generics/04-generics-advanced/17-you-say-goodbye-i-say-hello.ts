type TResponse<TGreeting> = TGreeting extends "goodbye" ? "hello" : "goodbye";

function youSayGoodbyeISayHello<TGreeting extends "goodbye" | "hello">(
	greeting: TGreeting
): TResponse<TGreeting> {
	return (greeting === "goodbye" ? "hello" : "goodbye") as TResponse<TGreeting>;
}

const goodbye = youSayGoodbyeISayHello("hello");
const hello = youSayGoodbyeISayHello("goodbye");
