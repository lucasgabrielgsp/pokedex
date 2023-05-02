import React from "react";
import { Modal } from "../BaseModal";
import { Button } from "components";
import { IPokemonState, IViewPokemonModalProps } from "types";
import { pokeAttributes, pokeTypes } from "consts";
import cameraIcon from "assets/images/camera.png";
import pokedex from "assets/images/pokeball.png";
import { useDispatch, useSelector } from "react-redux";
import { setPokemons } from "state";

export const ViewPokemonModal: React.FC<IViewPokemonModalProps> = ({
  isOpen,
  setIsOpen,
  pokeData,
}) => {
  const { caughtPokemons } = useSelector(
    (state: { pokemon: IPokemonState }) => state.pokemon
  );
  const dispatch = useDispatch();

  // Filter stats array to have only hp, attack and defense items;
  const filteredPokeStatsData = pokeData.stats.filter(
    (item) =>
      item.stat.name !== "special-attack" &&
      item.stat.name !== "special-defense" &&
      item.stat.name !== "speed"
  );

  const handleCatchPokemon = () => {
    if (caughtPokemons.length === 6) {
      alert("Você não possui mais slots disponíveis para capturar um pokemon!");
      return;
    }
    dispatch(setPokemons(pokeData));
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="view-pk-content">
        <div className="view-pk-content__icon">
          <Button
            color="green"
            size="xl"
            icon={
              <img
                src={pokeData.sprites.front_default ?? cameraIcon}
                alt="pokemon"
                style={{ width: "140px" }}
              />
            }
            useAuxiliarButton={pokeData.sprites.front_default ? false : true}
          />
        </div>

        <h1 className="view-pk-content__title">
          {pokeData.name.toUpperCase()}
        </h1>
        <div className="view-pk-content__attributes">
          {filteredPokeStatsData.map((item, index, arr) => (
            <>
              <div key={index}>
                <p>{pokeAttributes[item.stat.name]}</p>
                <p>{item.base_stat}</p>
              </div>
              {arr.length - 1 !== index && <hr />}
            </>
          ))}
        </div>

        <div className="view-pk-content__separator">
          <p>TIPO</p>
          <hr />
        </div>

        <div className="view-pk-content__types">
          {pokeData.types.map((item) => (
            <p key={item.type.name}>{pokeTypes[item.type.name]}</p>
          ))}
        </div>

        <div className="view-pk-content__separator">
          <p>HABILIDADES</p>
          <hr />
        </div>

        <div className="view-pk-content__types">
          {/* use only first and second move items */}
          {pokeData.moves.slice(0, 2).map(({ move }) => (
            <p key={move.name}>{move.name}</p>
          ))}
        </div>
        <div className="view-pk-content__catchBtn">
          <button onClick={handleCatchPokemon}>
            <img src={pokedex} alt="pokedex" />
          </button>
        </div>
      </div>
    </Modal>
  );
};
