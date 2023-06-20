type DeepPartial<T> = T extends Array<infer Obj>
	? Array<DeepPartial<Obj>>
	: {
			[K in keyof T]?: DeepPartial<T[K]>;
	  };

type MyType = {
	a: string;
	b: number;
	c: {
		d: string;
		e: {
			f: string;
			g: {
				h: string;
				i: string;
			}[];
		};
	};
};

type Result = DeepPartial<MyType>;

const example: Result = {
	a: "a",
	c: {
		e: {
			g: [
				//! Notice how we're not allowed to pass `undefined` *inside* the array!
				//@ts-expect-error
				undefined,
				{
					h: "h",
				},
			],
		},
	},
};
