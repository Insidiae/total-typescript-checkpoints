/**
 * Here, the id property is shared between all three
 * interfaces. Can you find a way to refactor this to
 * make it more DRY?
 */

interface Base {
	id: string;
}

interface User extends Base {
	firstName: string;
	lastName: string;
}

interface Post extends Base {
	title: string;
	body: string;
}

interface Comment extends Base {
	comment: string;
}
