// const returnBothOfWhatIPassIn = <A, B>(params: { a: A; b: B }) => {
//   return {
//     first: params.a,
//     second: params.b,
//   };
// };

// Or:

// function returnBothOfWhatIPassIn<A, B>(params: { a: A; b: B; }) {
// 	return {
// 		first: params.a,
// 		second: params.b,
// 	};
// }

// Or:

type Params<T1, T2> = {
	a: T1;
	b: T2;
};

function returnBothOfWhatIPassIn<A, B>(params: Params<A, B>) {
	return {
		first: params.a,
		second: params.b,
	};
}
