import { Brand } from "../helpers/Brand";

type Valid<T> = Brand<T, "Valid">;

interface PasswordValues {
	password: string;
	confirmPassword: string;
}

const validatePassword = (values: PasswordValues) => {
	if (values.password !== values.confirmPassword) {
		throw new Error("Passwords do not match");
	}

	return values as Valid<PasswordValues>;
};

const createUserOnApi = (values: Valid<PasswordValues>) => {
	// Imagine this function creates the user on the API
};

const onSubmitHandlerInvalid = (values: PasswordValues) => {
	// @ts-expect-error
	createUserOnApi(values);
};

const onSubmitHandlerValid = (values: PasswordValues) => {
	const validatedValues = validatePassword(values);
	createUserOnApi(validatedValues);
};
