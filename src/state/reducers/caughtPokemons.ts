import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPokemon, IPokemonState } from "types";

const initialState = {
  caughtPokemons: [] as IPokemon[],
};

export const LoginState = createSlice({
  name: "caughtPokemons",
  initialState,
  reducers: {
    setPokemons(state: IPokemonState, action: PayloadAction<IPokemon>) {
      state.caughtPokemons = [...state.caughtPokemons, action.payload];
    },
  },
});

export default LoginState.reducer;
