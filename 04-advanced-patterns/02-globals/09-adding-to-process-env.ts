/**
 * Clues:
 *
 * 1. You'll need declare global again
 *
 * 2. You'll need to use the NodeJS namespace
 *
 * 3. Inside the NodeJS namespace, you'll need to add a
 * MY_ENV_VAR property to the ProcessEnv interface
 */

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			MY_ENV_VAR: string;
		}
	}
}

process.env.MY_ENV_VAR = "Hello, world!";

const myVar = process.env.MY_ENV_VAR;

//? Suppress module declaration error
export {};
