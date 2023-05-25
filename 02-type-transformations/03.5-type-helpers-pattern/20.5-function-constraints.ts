type GetParametersAndReturnType<T extends (...args: any) => any> = {
	params: Parameters<T>;
	returnValue: ReturnType<T>;
};
