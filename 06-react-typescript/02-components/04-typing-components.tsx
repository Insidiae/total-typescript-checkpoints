import React from "react";

// type ButtonProps = {
//   className: string;
// };

// export const Button = (props: ButtonProps) => {
//   return <button className={props.className}></button>;
// };

// Or, if you also want the other props for a `<button>`:
// export const Button = (
//   props: React.HTMLAttributes<HTMLButtonElement> & ButtonProps
// ) => {
//   return <button className={props.className}></button>;
// };

// Or you can use an interface to extend from default HTML attributes:
interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  className: string;
}

export const Button = (props: ButtonProps) => {
  return <button className={props.className}></button>;
};

const Parent = () => {
  return (
    <>
      {/* @ts-expect-error */}
      <Button></Button>

      <Button className="my-class"></Button>
    </>
  );
};
