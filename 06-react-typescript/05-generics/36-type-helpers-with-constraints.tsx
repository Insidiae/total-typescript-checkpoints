import { Equal, Expect } from "../helpers/type-utils";

/**
 * There's a problem with our AllOrNothing type. It's letting
 * us pass ANYTHING as T. We want to constrain it so that it
 * only works with objects.
 */

//? Previous solution:
// type AllOrNothing<Object extends Record<PropertyKey, any>> =
//   | { [Key in keyof Object]: Object[Key] }
//   | { [Key in keyof Object]?: undefined };

type ToUndefinedObject<Object extends object> = Partial<
  Record<keyof Object, undefined>
>;

type AllOrNothing<Object extends object> = Object | ToUndefinedObject<Object>;

type tests = [
  // @ts-expect-error
  AllOrNothing<string>,
  // @ts-expect-error
  AllOrNothing<number>,
  // @ts-expect-error
  AllOrNothing<undefined>,
  // @ts-expect-error
  AllOrNothing<null>,
  Expect<Equal<AllOrNothing<{ a: string }>, { a: string } | { a?: undefined }>>
];
