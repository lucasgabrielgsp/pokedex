import React from "react";
import { IButtonProps } from "types";

export const Button: React.FC<IButtonProps> = ({
  text,
  icon,
  onClick,
  color,
  size,
  useAuxiliarButton,
}) => {
  return (
    <>
      <button
        onClick={onClick ? onClick : undefined}
        className={`btn btn--${text ? "text" : "icon"} btn--${
          color ? color : "default"
        } btn--${size ? size : "md"}`}
      >
        {text || icon}
      </button>

      {useAuxiliarButton && (
        <div className={`btn btn--icon btn--neutralBorder `}>+</div>
      )}
    </>
  );
};
