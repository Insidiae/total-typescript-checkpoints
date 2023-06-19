import _ from "lodash";

/**
 * We've made a reusable function here to group
 * arrays of objects by age. I want you to:
 *
 * 1. Make sure that the errors (below) disappear
 * 2. Take a look at the typings for _.groupBy to
 * see if you can understand them.
 */
const groupByAge = <T extends { age: number }>(array: T[]) => {
	const grouped = _.groupBy(array, "age");

	return grouped;
};

const result = groupByAge([
	{
		name: "John",
		age: 20,
	},
	{
		name: "Jane",
		age: 20,
	},
	{
		name: "Mary",
		age: 30,
	},
]);

groupByAge([
	{
		// @ts-expect-error
		name: "John",
	},
	{
		// @ts-expect-error
		name: "Bill",
	},
]);
