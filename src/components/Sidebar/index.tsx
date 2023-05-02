import React from "react";
import { Button } from "components";
import plusIcon from "assets/images/plus.png";
import { useSelector } from "react-redux";
import { IPokemonState, ISideBarProps } from "types";

export const Sidebar: React.FC<ISideBarProps> = ({ setIsOpenAddCustomPk }) => {
  const { caughtPokemons } = useSelector(
    (state: { pokemon: IPokemonState }) => state.pokemon
  );

  const sideButtons = [...Array(6).keys()];

  return (
    <>
      <div className="sidebar">
        {caughtPokemons.map((item, index) => (
          <div className="sidebar__item" key={index}>
            <img
              src={item.sprites.front_default}
              alt=""
              style={{ width: "55px" }}
            />
          </div>
        ))}

        {sideButtons
          .slice(0, sideButtons.length - caughtPokemons.length)
          .map((item) => (
            <div className="sidebar__item" key={item}>
              ?
            </div>
          ))}

        <Button
          onClick={() => setIsOpenAddCustomPk(true)}
          icon={<img src={plusIcon} alt="+" />}
        />
      </div>
    </>
  );
};
