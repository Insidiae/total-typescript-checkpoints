import { ComponentProps } from "react";
import { Equal, Expect } from "../helpers/type-utils";

// export const Input = (
//   props: Omit<ComponentProps<"input">, "onChange"> & {
//     onChange: (value: string) => void;
//   }
// ) => {
//   return (
//     <input
//       {...props}
//       onChange={(e) => {
//         props.onChange(e.target.value);
//       }}
//     ></input>
//   );
// };

// Or:
// interface InputProps extends Omit<ComponentProps<"input">, "onChange"> {
//   onChange: (value: string) => void;
// }

// export const Input = (props: InputProps) => {
//   return (
//     <input
//       {...props}
//       onChange={(e) => {
//         props.onChange(e.target.value);
//       }}
//     ></input>
//   );
// };

// Or, using a type helper:
type OverrideProps<T, TOverriden> = Omit<T, keyof TOverriden> & TOverriden;

type InputProps = OverrideProps<
  ComponentProps<"input">,
  {
    onChange: (value: string) => void;
  }
>;

export const Input = (props: InputProps) => {
  return (
    <input
      {...props}
      onChange={(e) => {
        props.onChange(e.target.value);
      }}
    ></input>
  );
};

const Parent = () => {
  return (
    <Input
      onChange={(e) => {
        console.log(e);

        type test = Expect<Equal<typeof e, string>>;
      }}
    ></Input>
  );
};
