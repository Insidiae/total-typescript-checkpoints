import React from "react";

// export const Button = ({
//   className,
//   ...rest
// }: React.HTMLAttributes<HTMLButtonElement>) => {
//   return (
//     <button {...rest} className={`default-classname ${className}`}></button>
//   );
// };

// Or, a more detailed version:
// export const Button = ({
//   className,
//   ...rest
// }: React.DetailedHTMLProps<
//   React.HTMLAttributes<HTMLButtonElement>,
//   HTMLButtonElement
// >) => {
//   return (
//     <button {...rest} className={`default-classname ${className}`}></button>
//   );
// };

// Or:
export const Button = ({
  className,
  ...rest
}: React.ComponentProps<"button">) => {
  return (
    <button {...rest} className={`default-classname ${className}`}></button>
  );
};

const Parent = () => {
  return <Button onClick={() => {}} type="button"></Button>;
};
