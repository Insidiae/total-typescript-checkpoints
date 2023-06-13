/**
 * I've made a small change to the solution of the previous problem
 * which breaks it. Can you spot what it is?
 *
 * Clue: it's somewhere inside class TypeSafeStringMap, and it's
 * on the type level - not the runtime level.
 */
//! It's missing a default generic!
// class TypeSafeStringMap<TMap extends Record<string, string> = {}> {
class TypeSafeStringMap<TMap extends Record<string, string>> {
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

		return this;
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
