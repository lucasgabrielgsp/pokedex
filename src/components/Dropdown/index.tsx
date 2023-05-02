import React from "react";
import chevron from "assets/images/chevronDownBlack.png";
import { IDropdownProps } from "types";

export const Dropdown: React.FC<IDropdownProps> = ({ options }) => {
  return (
    <div className="dropdown__container">
      <img src={chevron} className="dropdown__icon" alt="Chevron" />
      <select className="dropdown">
        <option className="dropdown__option" value="">
          Selecione o(s) tipo(s)
        </option>
        {options &&
          options.map((option, index) => (
            <option
              className="dropdown__option"
              value={option.value}
              key={index}
            >
              {option.text}
            </option>
          ))}
      </select>
    </div>
  );
};
