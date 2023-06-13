class CustomError extends Error {
	constructor(message: string, public code: number) {
		super(message);
		this.name = "CustomError";
	}
}

// How do we type the 'error' parameter?
const handleCustomError = (error: CustomError) => {
	console.error(error.code);
};

export {};
