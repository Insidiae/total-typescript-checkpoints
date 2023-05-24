// export const addTwoNumbers = (params: { first: number; second: number }) => {
// 	return params.first + params.second;
// };

// Or:

type AddTwoNumbersParams = {
	first: number;
	second: number;
};

export const addTwoNumbers = (params: AddTwoNumbersParams) => {
	return params.first + params.second;
};
