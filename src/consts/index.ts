import sword from "assets/images/sword.png";
import shield from "assets/images/shield.png";
import speed from "assets/images/speed.png";

export const availableIds = [...Array(807).keys()];

export const pokeTypes = {
  water: "ÁGUA",
  fire: "FOGO",
  grass: "GRAMA",
  electric: "ELÉTRICO",
  flying: "VOADOR",
  rock: "PEDRA",
  ground: "TERRA",
  psychic: "FÍSICO",
  steel: "AÇO",
  ice: "GELO",
  dragon: "DRAGÃO",
  bug: "INSETO",
  ghost: "FANTASMA",
  dark: "NOTURNO",
  fighting: "LUTADOR",
  normal: "NORMAL",
  poison: "VENENO",
  fairy: "FADA",
} as { [k: string]: string };

export const pokeAttributes = {
  hp: "HP",
  attack: "ATAQUE",
  defense: "DEFESA",
  "special-attack": "ATAQUE ESPECIAL",
  "special-defense": "DEFESA ESPECIAL",
  speed: "VELOCIDADE",
} as { [k: string]: string };

export const basicInfoForm = {
  nome: {
    label: "NOME",
    placeholder: "Nome",
    type: "text",
  },
  hp: {
    label: "HP",
    placeholder: "HP",
    type: "text",
  },
  peso: {
    label: "PESO",
    placeholder: "Peso",
    type: "number",
    suffix: "kg",
  },
  altura: {
    label: "ALTURA",
    placeholder: "Altura",
    type: "number",
    suffix: "cm",
  },
} as {
  [k: string]: {
    label: string;
    placeholder: string;
    type: string;
    suffix?: string;
  };
};

export const statisticForm = {
  defesa: {
    label: "DEFESA",
    placeholder: "Defesa",
    type: "number",
  },
  ataque: {
    label: "ATAQUE",
    placeholder: "Ataque",
    type: "text",
  },
  "ATAQUE ESPECIAL": {
    label: "ATAQUE ESPECIAL",
    placeholder: "ATAQUE ESPECIAL",
    type: "number",
  },
  "DEFESA ESPECIAL": {
    label: "DEFESA ESPECIAL",
    placeholder: "DEFESA ESPECIAL",
    type: "number",
  },
  velocidade: {
    label: "VELOCIDADE",
    placeholder: "Velocidade",
    type: "number",
  },
};

export const labelIcons = {
  DEFESA: shield,
  ATAQUE: sword,
  "DEFESA ESPECIAL": shield,
  "ATAQUE ESPECIAL": sword,
  VELOCIDADE: speed,
} as { [k: string]: string };

export const abilityFormItems = [...Array(4).keys()];
