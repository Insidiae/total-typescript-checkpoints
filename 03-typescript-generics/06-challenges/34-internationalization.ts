type GetParamKeys<TTranslation extends string> = TTranslation extends ""
  ? []
  : TTranslation extends `${string}{${infer Param}}${infer Tail}`
  ? [Param, ...GetParamKeys<Tail>]
  : [];

//* With two type arguments:
// function translate<
//   Translations extends Record<string, string>,
//   Key extends keyof Translations
// >(
//   translations: Translations,
//   key: Key,
//   ...args: GetParamKeys<Translations[Key]> extends []
//     ? []
//     : [params: Record<GetParamKeys<Translations[Key]>[number], string>]
// ) {
//   const translation = translations[key];
//   const params: any = args[0] || {};

//   return translation.replace(/{(\w+)}/g, (_, key) => params[key]);
// }

//* With two type arguments and a type helper:
// type GetParamKeysAsUnion<TTranslation extends string> =
// GetParamKeys<TTranslation>[number];

// function translate<
//   Translations extends Record<string, string>,
//   Key extends keyof Translations,
// >(
//   translations: Translations,
//   key: Key,
//   ...args: GetParamKeysAsUnion<Translations[Key]> extends undefined
//     ? []
//     : [params: Record<GetParamKeysAsUnion<Translations[Key]>, string>]
// ) {
//   const translation = translations[key];
//   const params: any = args[0] || {};

//   return translation.replace(/{(\w+)}/g, (_, key) => params[key]);
// }

//* With three type arguments:
function translate<
  Translations extends Record<string, string>,
  Key extends keyof Translations,
  ParamKeys extends string[] = GetParamKeys<Translations[Key]>
>(
  translations: Translations,
  key: Key,
  ...args: ParamKeys extends []
    ? []
    : [params: Record<ParamKeys[number], string>]
) {
  const translation = translations[key];
  const params: any = args[0] || {};

  return translation.replace(/{(\w+)}/g, (_, key) => params[key]);
}

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
