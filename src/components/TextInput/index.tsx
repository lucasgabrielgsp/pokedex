import React from "react";
import { ITextInputProps } from "types";

export const TextInput: React.FC<ITextInputProps> = ({
  className,
  label,
  placeholder,
  name,
}) => {
  return (
    <div className={`${className} input__container`} key={label}>
      {label && <label className="input__label">{label}</label>}
      <input
        className="input"
        type="text"
        placeholder={placeholder}
        name={name}
        key={label}
      />
    </div>
  );
};

export default TextInput;
