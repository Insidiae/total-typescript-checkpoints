import { z } from "zod";

const makeZodSafeFunction = <TArgs, TResult>(
	schema: z.ZodSchema<TArgs>,
	func: (arg: TArgs) => TResult
) => {
	return (arg: TArgs) => {
		const result = schema.parse(arg);
		return func(result);
	};
};

const addTwoNumbersArg = z.object({
	a: z.number(),
	b: z.number(),
});

const addTwoNumbers = makeZodSafeFunction(
	addTwoNumbersArg,
	(args) => args.a + args.b
);
