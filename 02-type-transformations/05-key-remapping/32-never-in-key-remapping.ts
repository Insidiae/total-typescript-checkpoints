interface Example {
	name: string;
	age: number;
	id: string;
	organisationId: string;
	groupId: string;
}

type SearchForId = `${string}${"id" | "Id"}${string}`;

type FilterIdKeys<K> = K extends SearchForId ? K : never;

type OnlyIdKeys<T> = {
	[K in keyof T as FilterIdKeys<K>]: T[K];
};
