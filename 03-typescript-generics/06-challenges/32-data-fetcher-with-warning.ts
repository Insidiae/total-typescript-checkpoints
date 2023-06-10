const fetchData = async <
	TResult = "You must pass a type argument to fetchData"
>(
	url: string
): Promise<TResult> => {
	const data = await fetch(url).then((response) => response.json());
	return data;
};
