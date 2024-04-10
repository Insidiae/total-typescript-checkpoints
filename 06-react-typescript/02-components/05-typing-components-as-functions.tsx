import React from "react";

interface Props {
  className: string;
}

/* @ts-expect-error */
export const Button: React.FC<Props> = (props) => {
  return {
    ohDear: "123",
  };
};

//? If you prefer the `function` syntax:
// export function Button(props: Props): React.ReactElement<Props> {
//   /* @ts-expect-error */
//   return { ohDear: "123" };
// }

const Parent = () => {
  return (
    <>
      <Button className="my-class"></Button>
    </>
  );
};
