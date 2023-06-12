import { Brand } from "../helpers/Brand";

type PostId = Brand<string, "PostId">;
type UserId = Brand<string, "UserId">;

interface User {
	id: UserId;
	name: string;
}

interface Post {
	id: PostId;
	title: string;
}

/**
 * Change this type definition! We should be able to
 * add users and posts to the db by their id.
 *
 * You'll need an index signature of some kind - or maybe
 * two!
 */
// const db: {
// 	[id: UserId]: User;
// 	[id: PostId]: Post;
// } = {};

// Or:
const db: Record<UserId, User> & Record<PostId, Post> = {};

const postId = "post_1" as PostId;
const userId = "user_1" as UserId;

db[postId] = {
	id: postId,
	title: "Hello world",
};

db[userId] = {
	id: userId,
	name: "Miles",
};

const post = db[postId];
const user = db[userId];

const user2Id = "user_2" as UserId;

const user2: User = {
	id: user2Id,
	name: "Miles",
};

// @ts-expect-error
db[postId] = user2;
