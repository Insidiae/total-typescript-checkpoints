/**
 * In this problem, we need to type the return type of the set()
 * method to make it add keys to the TMap generic.
 *
 * In the return type of set(), we'll need to modify the TMap
 * generic to add the new key/value pair.
 */

class TypeSafeStringMap<TMap extends Record<string, string> = {}> {
	private map: TMap;
	constructor() {
		this.map = {} as TMap;
	}

	get(key: keyof TMap): string {
		return this.map[key];
	}

	set<K extends string>(
		key: K,
		value: string
	): TypeSafeStringMap<TMap & Record<K, string>> {
		(this.map[key] as any) = value;

		return this as any;
	}
}

const map = new TypeSafeStringMap()
	.set("matt", "pocock")
	.set("jools", "holland")
	.set("brandi", "carlile");

map.get(
	// @ts-expect-error
	"jim"
);

const pocock = map.get("matt");
const holland = map.get("jools");
const carlile = map.get("brandi");
