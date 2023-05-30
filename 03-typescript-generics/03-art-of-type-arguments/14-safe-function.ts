//* Solution 1
// const makeSafe =
// 	<Params extends any[], ReturnValues>(
// 		func: (...args: Params) => ReturnValues
// 	) =>
// 	(
// 		...args: Params
// 	):
// 		| {
// 				type: "success";
// 				result: ReturnValues;
// 		  }
// 		| {
// 				type: "failure";
// 				error: Error;
// 		  } => {
// 		try {
// 			const result = func(...args);

// 			return {
// 				type: "success",
// 				result,
// 			};
// 		} catch (e) {
// 			return {
// 				type: "failure",
// 				error: e as Error,
// 			};
// 		}
// 	};

// Or:

// function makeSafe<Params extends any[], ReturnValues>(
// 	func: (...args: Params) => ReturnValues
// ) {
// 	return function (...args: Params):
// 		| {
// 				type: "success";
// 				result: ReturnValues;
// 		  }
// 		| {
// 				type: "failure";
// 				error: Error;
// 		  } {
// 		try {
// 			const result = func(...args);

// 			return {
// 				type: "success",
// 				result,
// 			};
// 		} catch (e) {
// 			return {
// 				type: "failure",
// 				error: e as Error,
// 			};
// 		}
// 	};
// }

//* Solution 2
// const makeSafe =
// 	<UnsafeFunction extends (...args: any[]) => any>(func: UnsafeFunction) =>
// 	(
// 		...args: Parameters<UnsafeFunction>
// 	):
// 		| {
// 				type: "success";
// 				result: ReturnType<UnsafeFunction>;
// 		  }
// 		| {
// 				type: "failure";
// 				error: Error;
// 		  } => {
// 		try {
// 			const result = func(...args);

// 			return {
// 				type: "success",
// 				result,
// 			};
// 		} catch (e) {
// 			return {
// 				type: "failure",
// 				error: e as Error,
// 			};
// 		}
// 	};

// Or:

function makeSafe<UnsafeFunction extends (...args: any[]) => any>(
	func: UnsafeFunction
) {
	return function (...args: Parameters<UnsafeFunction>):
		| {
				type: "success";
				result: ReturnType<UnsafeFunction>;
		  }
		| {
				type: "failure";
				error: Error;
		  } {
		try {
			const result = func(...args);

			return {
				type: "success",
				result,
			};
		} catch (e) {
			return {
				type: "failure",
				error: e as Error,
			};
		}
	};
}
