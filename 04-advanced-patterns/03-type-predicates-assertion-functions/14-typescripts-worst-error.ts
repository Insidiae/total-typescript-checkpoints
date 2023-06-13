interface User {
	id: string;
	name: string;
}

interface AdminUser extends User {
	role: "admin";
	organisations: string[];
}

interface NormalUser extends User {
	role: "normal";
}

const assertUserIsAdmin = (
	user: NormalUser | AdminUser
): asserts user is AdminUser => {
	if (user.role !== "admin") {
		throw new Error("Not an admin user");
	}
};

const example = (user: NormalUser | AdminUser) => {
	/**
	 * Why is this error happening?
	 *
	 * Note: PLEASE DON'T SPEND TOO LONG HERE - feel
	 * free to use the solution. I have personally wasted
	 * hours on this error.
	 */
	//! Tunring `assertUserIsAdmin` into a `function`
	//! seems to resolve this error.
	assertUserIsAdmin(user);

	type tests = [Expect<Equal<typeof user, AdminUser>>];
};
