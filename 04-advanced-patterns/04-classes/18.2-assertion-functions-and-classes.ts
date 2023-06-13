interface User {
	id: string;
}

export class SDK {
	loggedInUser?: User;

	constructor(loggedInUser?: User) {
		this.loggedInUser = loggedInUser;
	}

	// How do we type this assertion function?
	assertIsLoggedIn(): asserts this is { loggedInUser: User } {
		if (!this.loggedInUser) {
			throw new Error("Not logged in");
		}
	}

	createPost(title: string, body: string) {
		console.log(typeof this.loggedInUser);

		this.assertIsLoggedIn();

		console.log(typeof this.loggedInUser);
	}
}
