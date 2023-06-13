import { Brand } from "../helpers/Brand";

type Valid<T> = Brand<T, "Valid">;

interface PasswordValues {
	password: string;
	confirmPassword: string;
}

/**
 * 💡 You'll need to change this function...
 */
const isValidPassword = (
	values: PasswordValues
): values is Valid<PasswordValues> => {
	if (values.password !== values.confirmPassword) {
		return false;
	}
	return true;
};

const createUserOnApi = (values: Valid<PasswordValues>) => {
	// Imagine this function creates the user on the API
};

const onSubmitHandlerInvalid = (values: PasswordValues) => {
	// @ts-expect-error
	createUserOnApi(values);
};

const onSubmitHandlerValid = (values: PasswordValues) => {
	if (isValidPassword(values)) {
		createUserOnApi(values);
	}
};
