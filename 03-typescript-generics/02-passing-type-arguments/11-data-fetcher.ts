// async function fetchData<DataType>(url: string): Promise<DataType> {
// 	const data = await fetch(url).then((response) => response.json());
// 	return data;
// }

// Or:
// async function fetchData<DataType>(url: string) {
// 	const data = await fetch(url).then((response) => response.json());
// 	return data as DataType;
// }

// Or:
async function fetchData<DataType>(url: string) {
	const data: DataType = await fetch(url).then((response) => response.json());
	return data;
}
