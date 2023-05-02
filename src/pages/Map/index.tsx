import React, { useEffect, useState } from "react";
import {
  Sidebar,
  Ash,
  Tooltip,
  ViewPokemonModal,
  AddCustomPokemonModal,
} from "components";
import { api } from "services";
import { availableIds } from "consts";
import { getRandomNumber } from "utils";
import { IPokemon } from "types";

export const MapPage: React.FC = () => {
  const [isOpenViewPokemonModal, setIsOpenViewPokemonModal] =
    useState<boolean>(false);
  const [isOpenAddCustomPk, setIsOpenAddCustomPk] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pokemonData, setPokemonData] = useState<IPokemon>();

  useEffect(() => {
    if (isLoading) {
      const randomIndex = getRandomNumber();
      const randomPokemonId = availableIds[randomIndex];

      // This timeout was used because the request is too fast
      // so, for be more "natural" and similar to figma prototype, I used this setTimeout.
      setTimeout(() => {
        api.get(`${randomPokemonId}`).then((res) => {
          const { data } = res;
          setPokemonData(data);
          setIsLoading(false);
          setIsOpenViewPokemonModal(true);
        });
      }, 3000);
    }
  }, [isLoading]);

  return (
    <div className="map">
      <Tooltip isLoading={isLoading}>
        <Ash isWalking={isLoading} onClick={() => setIsLoading(!isLoading)} />
      </Tooltip>
      <Sidebar setIsOpenAddCustomPk={setIsOpenAddCustomPk} />

      {pokemonData && (
        <ViewPokemonModal
          isOpen={isOpenViewPokemonModal}
          pokeData={pokemonData as IPokemon}
          setIsOpen={setIsOpenViewPokemonModal}
        />
      )}

      <AddCustomPokemonModal
        setIsOpen={setIsOpenAddCustomPk}
        isOpen={isOpenAddCustomPk}
      />
    </div>
  );
};
