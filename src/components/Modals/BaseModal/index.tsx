import React from "react";
import closeIcon from "assets/images/close.png";
import { IBaseModalProps } from "types";

export const Modal: React.FC<IBaseModalProps> = ({
  children,
  isOpen,
  setIsOpen,
}) =>
  isOpen ? (
    <div className="modal">
      <div className="modal__container">
        <button className="modal__close" onClick={() => setIsOpen(!isOpen)}>
          <img src={closeIcon} alt="Fechar" />
        </button>
        <div className="modal__content">{children}</div>
      </div>
    </div>
  ) : (
    <></>
  );
