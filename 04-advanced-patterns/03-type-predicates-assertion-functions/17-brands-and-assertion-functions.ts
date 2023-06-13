import { Brand } from "../helpers/Brand";

type Valid<T> = Brand<T, "Valid">;

interface PasswordValues {
	password: string;
	confirmPassword: string;
}

/**
 * 💡 You'll need to change this function...
 */
function assertIsValidPassword(
	values: PasswordValues
): asserts values is Valid<PasswordValues> {
	if (values.password !== values.confirmPassword) {
		throw new Error("Password is invalid");
	}
}

const createUserOnApi = (values: Valid<PasswordValues>) => {
	// Imagine this function creates the user on the API
};

const onSubmitHandlerInvalid = (values: PasswordValues) => {
	// @ts-expect-error
	createUserOnApi(values);
};

const onSubmitHandlerValid = (values: PasswordValues) => {
	assertIsValidPassword(values);
	createUserOnApi(values);
};
