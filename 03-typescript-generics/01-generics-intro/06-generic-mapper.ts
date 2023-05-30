export function concatenateFirstNameAndLastName<
	User extends { firstName: string; lastName: string }
>(user: User) {
	return {
		...user,
		fullName: `${user.firstName} ${user.lastName}`,
	};
}
