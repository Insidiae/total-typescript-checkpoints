import { Equal, Expect } from "../helpers/type-utils";

type Fruit = "apple" | "banana" | "orange";

type AppleOrBanana = Fruit extends infer TFruit
	? TFruit extends "apple" | "banana"
		? TFruit
		: never
	: never;

// Or:

// type GetAppleOrBanana<TFruit> = TFruit extends "apple" | "banana" ? TFruit : never;
// type AppleOrBanana = GetAppleOrBanana<Fruit>

type tests = [Expect<Equal<AppleOrBanana, "apple" | "banana">>];
