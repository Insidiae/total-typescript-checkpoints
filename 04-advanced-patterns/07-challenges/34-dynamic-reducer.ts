// Clue - this will be needed!
type PayloadsToDiscriminatedUnion<T extends Record<string, any>> = {
	[K in keyof T]: { type: K } & T[K];
}[keyof T];

/**
 * It turns a record of handler information into a discriminated union:
 *
 * | { type: "LOG_IN", username: string, password: string }
 * | { type: "LOG_OUT" }
 */
type TestingPayloadsToDiscriminatedUnion = PayloadsToDiscriminatedUnion<{
	LOG_IN: { username: string; password: string };
	LOG_OUT: {};
}>;

/**
 * Clue:
 *
 * You'll need to add two generics here!
 */
export class DynamicReducer<
	TState,
	TPayloadMap extends Record<string, any> = {}
> {
	private handlers = {} as Record<
		string,
		(state: TState, payload: any) => TState
	>;

	addHandler<TType extends string, TPayload>(
		type: TType,
		handler: (state: TState, payload: TPayload) => TState
	): DynamicReducer<TState, TPayloadMap & Record<TType, TPayload>> {
		this.handlers[type] = handler;

		return this;
	}

	reduce(
		state: TState,
		action: PayloadsToDiscriminatedUnion<TPayloadMap>
	): TState {
		const handler = this.handlers[action.type];
		if (!handler) {
			return state;
		}

		return handler(state, action);
	}
}

interface State {
	username: string;
	password: string;
}

const reducer = new DynamicReducer<State>()
	.addHandler(
		"LOG_IN",
		(state, action: { username: string; password: string }) => {
			return {
				username: action.username,
				password: action.password,
			};
		}
	)
	.addHandler("LOG_OUT", () => {
		return {
			username: "",
			password: "",
		};
	});

//* Should return the new state after LOG_IN
const state1 = reducer.reduce(
	{ username: "", password: "" },
	{ type: "LOG_IN", username: "foo", password: "bar" }
);

console.log(typeof state1);

// type test = [Expect<Equal<typeof state, State>>];

//* Should return the new state after LOG_OUT
const state2 = reducer.reduce(
	{ username: "foo", password: "bar" },
	{ type: "LOG_OUT" }
);

console.log(typeof state2);
// type test = [Expect<Equal<typeof state, State>>];

//* Should error if you pass it an incorrect action
const state3 = reducer.reduce(
	{ username: "foo", password: "bar" },
	{
		// @ts-expect-error
		type: "NOT_ALLOWED",
	}
);

//* Should error if you pass an incorrect payload
const state4 = reducer.reduce(
	{ username: "foo", password: "bar" },
	// @ts-expect-error
	{
		type: "LOG_IN",
	}
);
