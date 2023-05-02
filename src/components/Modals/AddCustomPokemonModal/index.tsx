import React from "react";
import { Modal } from "../BaseModal";
import { Button, Dropdown, NumberInput, TextInput } from "components";
import cameraIcon from "assets/images/camera.png";
import { abilityFormItems, basicInfoForm, statisticForm } from "consts";
import { IDefaultModalProps } from "types";

export const AddCustomPokemonModal: React.FC<IDefaultModalProps> = ({
  isOpen,
  setIsOpen,
}) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="custom-pk-content">
        <div className="custom-pk-content__icon">
          <Button
            color="green"
            size="xl"
            icon={
              <img src={cameraIcon} alt="camera" style={{ width: "90px" }} />
            }
            useAuxiliarButton={true}
          />
        </div>
        <div className="custom-pk-content__form">
          {Object.values(basicInfoForm).map((item) => {
            if (item.type === "number") {
              return (
                <NumberInput
                  label={item.label}
                  placeholder={item.placeholder}
                  suffix={item?.suffix}
                />
              );
            }
            return (
              <TextInput label={item.label} placeholder={item.placeholder} />
            );
          })}
          <div className="custom-pk-content__separator">
            <p>TIPO</p>
            <hr />
          </div>
          <Dropdown />
          <div className="custom-pk-content__separator">
            <p>HABILIDADES</p>
            <hr />
          </div>
          {abilityFormItems.map((item) => (
            <TextInput
              placeholder={`Habilidade ${item + 1}`}
              label={`HABILIDADE ${item + 1}`}
            />
          ))}
          <div className="custom-pk-content__separator">
            <p>ESTATÍSTICAS</p>
            <hr />
          </div>
          {Object.values(statisticForm).map((item) => (
            <NumberInput label={item.label} />
          ))}
          <Button text="CRIAR POKEMON" />
        </div>
      </div>
    </Modal>
  );
};
