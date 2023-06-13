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

function assertUserIsAdmin(
	user: NormalUser | AdminUser
): asserts user is AdminUser {
	if (user.role !== "admin") {
		throw new Error("Not an admin user");
	}
}
const example = (user: NormalUser | AdminUser) => {
	assertUserIsAdmin(user);

	console.log(typeof user);
};
