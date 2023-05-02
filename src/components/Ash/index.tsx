import React from "react";
import walkingAsh from "assets/images/ashWalking.gif";
import stopAsh from "assets/images/ashFront.png";
import { IAshProps } from "types";

export const Ash: React.FC<IAshProps> = ({ isWalking, onClick }) => {
  return (
    <button className="ash" onClick={onClick} disabled={isWalking}>
      {isWalking ? (
        <img src={walkingAsh} alt="ash" />
      ) : (
        <img src={stopAsh} alt="ash" />
      )}
    </button>
  );
};
