type GetParamKeys<TTranslation extends string> = TTranslation extends ""
	? []
	: TTranslation extends `${string}{${infer Param}}${infer Tail}`
	? [Param, ...GetParamKeys<Tail>]
	: [];

type GetParamKeysAsUnion<TTranslation extends string> =
	GetParamKeys<TTranslation>[number];

const translate = <
	TTranslations extends Record<string, string>,
	TKey extends keyof TTranslations
>(
	translations: TTranslations,
	key: TKey,
	...args: GetParamKeysAsUnion<TTranslations[TKey]> extends undefined
		? []
		: [arg: Record<GetParamKeysAsUnion<TTranslations[TKey]>, string>]
) => {
	const translation = translations[key];
	const params: any = args[0] || {};

	return translation.replace(/{(\w+)}/g, (_, key) => params[key]);
};

// Or:
// const translate = <
// 	TTranslations extends Record<string, string>,
// 	TKey extends keyof TTranslations,
// 	TDynamicArgs = GetParamKeysAsUnion<TTranslations[TKey]>
// >(
// 	translations: TTranslations,
// 	key: TKey,
// 	...args: TDynamicArgs extends string
// 		? [arg: Record<TDynamicArgs, string>]
// 		: []
// ) => {
// 	const translation = translations[key];
// 	const params: any = args[0] || {};

// 	return translation.replace(/{(\w+)}/g, (_, key) => params[key]);
// };

// TESTS

const translations = {
	title: "Hello, {name}!",
	subtitle: "You have {count} unread messages.",
	button: "Click me!",
} as const;

const buttonText = translate(translations, "button");
const subtitle = translate(translations, "subtitle", {
	count: "2",
});
// @ts-expect-error
translate(translations, "title");
// @ts-expect-error
translate(translations, "button", {});
