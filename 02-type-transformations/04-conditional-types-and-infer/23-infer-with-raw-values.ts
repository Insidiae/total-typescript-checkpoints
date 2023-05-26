//* Without `infer`:
// type GetDataValue<DataType> = DataType extends { data: any }
// 	? DataType["data"]
// 	: never;

//* With `infer`:
type GetDataValue<DataType> = DataType extends { data: infer DataValue }
	? DataValue
	: never;
