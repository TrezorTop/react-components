import React, { ButtonHTMLAttributes, FC } from "react";
import classes from "./Button.module.scss";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  disabled?: boolean;
  active?: boolean;
}

const Button: FC<IButtonProps> = ({
  children = "button",
  className,
  active = false,
  disabled = false,
  onClick,
  ...attrs
}) => {
  return (
    <button
      className={[classes.Button, active && classes.Active].join(" ")}
      onClick={onClick}
      disabled={disabled}
      {...attrs}
    >
      {children}
    </button>
  );
};

export default Button;
