import { fetchUser } from "../fake-external-lib";
/**
 * We're using a function from fake-external lib, but we need
 * to extend the types. Extract the types below.
 */

type ParametersOfFetchUser = Parameters<typeof fetchUser>;

type ReturnTypeOfFetchUserWithFullName = Awaited<
	ReturnType<typeof fetchUser>
> & { fullName: string };

export const fetchUserWithFullName = async (
	...args: ParametersOfFetchUser
): Promise<ReturnTypeOfFetchUserWithFullName> => {
	const user = await fetchUser(...args);
	return {
		...user,
		fullName: `${user.firstName} ${user.lastName}`,
	};
};
