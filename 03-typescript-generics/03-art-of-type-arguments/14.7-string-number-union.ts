export const inferItemLiteral = <T extends string | number>(t: T) => {
	return {
		output: t,
	};
};

const result1 = inferItemLiteral("a");
const result2 = inferItemLiteral(123);
