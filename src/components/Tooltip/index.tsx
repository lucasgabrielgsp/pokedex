import React from "react";
import { ITooltipProps } from "types";

export const Tooltip: React.FC<ITooltipProps> = ({ isLoading, children }) => {
  return (
    <div className={`tooltip tooltip--${isLoading ? "loading" : "default"}`}>
      {children}
    </div>
  );
};
