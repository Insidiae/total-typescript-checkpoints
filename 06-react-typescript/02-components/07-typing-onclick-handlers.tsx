import React from "react";

// interface ButtonProps {
//   className: string;
//   children: React.ReactNode;
//   onClick: React.MouseEventHandler<HTMLButtonElement>;
// }

// Or, if you also want the other props for a `<button>`:
// interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
//   className: string;
//   children: React.ReactNode;
// }

// Or:
interface ButtonProps extends React.ComponentProps<"button"> {
  className: string;
  children: React.ReactNode;
}

export const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};
