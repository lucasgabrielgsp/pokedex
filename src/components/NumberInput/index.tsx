import React, { useState } from "react";
import chevron from "assets/images/chevronDownBlack.png";
import { labelIcons } from "consts";
import { INumberInputProps } from "types";

export const NumberInput: React.FC<INumberInputProps> = ({
  className,
  label,
  placeholder,
  name,
  suffix,
}) => {
  const [currentValue, setCurrentValue] = useState<number>(0);

  const handleInputNumber = (type: string) => {
    setCurrentValue((prevState) => {
      switch (type) {
        case "increase":
          return prevState + 1;
        case "decrease":
          if (prevState === 0) return prevState;
          return prevState - 1;
        default:
          return prevState;
      }
    });
  };

  return (
    <div className={`${className} input__container`} key={label}>
      {label && (
        <label className="input__label">
          {labelIcons[label] && <img src={labelIcons[label]} alt="" />}
          {label}{" "}
        </label>
      )}
      <div className="input__number">
        <input
          className="input"
          type="number"
          placeholder={placeholder}
          name={name}
          value={currentValue}
        />
        {suffix && <p className="input__suffix">{suffix}</p>}
        <div className="input__btns">
          <img
            src={chevron}
            className="input__increase"
            alt="Mais"
            onClick={() => handleInputNumber("increase")}
          />
          <img
            src={chevron}
            className="input__decrease"
            alt="Menos"
            onClick={() => handleInputNumber("decrease")}
          />
        </div>
      </div>
    </div>
  );
};
