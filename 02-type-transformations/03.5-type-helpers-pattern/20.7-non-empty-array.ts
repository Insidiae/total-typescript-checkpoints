// type NonEmptyArray<DataType> = [DataType, ...DataType[]];

// Or:

type NonEmptyArray<DataType> = [DataType, ...Array<DataType>];

export const makeEnum = (values: NonEmptyArray<string>) => {};

makeEnum(["a"]);
makeEnum(["a", "b", "c"]);

// @ts-expect-error
makeEnum([]);
