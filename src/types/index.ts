export interface IPokemon {
  abilities: Ability[];
  base_experience: number;
  forms: Species[];
  game_indices: GameIndex[];
  height: number;
  held_items: HeldItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_types: any[];
  species: Species;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}

export interface IPokemonState {
  caughtPokemons: IPokemon[];
}

export interface IAshProps {
  isWalking: boolean;
  onClick: () => void;
}

export interface IButtonProps {
  text?: string;
  icon?: string | any;
  onClick?: () => void;
  color?: string;
  size?: string;
  useAuxiliarButton?: boolean;
}

export interface IDefaultModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IBaseModalProps extends IDefaultModalProps {
  children: any;
}

export interface IViewPokemonModalProps extends IDefaultModalProps {
  pokeData: IPokemon;
}
export interface IDropdownProps {
  options?: {
    value: string;
    text: string;
  }[];
}

export interface ITextInputProps {
  className?: string;
  label: string;
  placeholder: string;
  name?: string;
}

export interface INumberInputProps {
  className?: string;
  label: string;
  placeholder?: string;
  name?: string;
  suffix?: string;
}
export interface ISideBarProps {
  setIsOpenAddCustomPk: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface ITooltipProps {
  isLoading: boolean;
  children: any;
}

interface Ability {
  ability: Species;
  is_hidden: boolean;
  slot: number;
}

interface Species {
  name: string;
  url: string;
}

interface GameIndex {
  game_index: number;
  version: Species;
}

interface HeldItem {
  item: Species;
  version_details: VersionDetail[];
}

interface VersionDetail {
  rarity: number;
  version: Species;
}

interface Move {
  move: Species;
  version_group_details: VersionGroupDetail[];
}

interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: Species;
  version_group: Species;
}

interface GenerationV {
  "black-white": Sprites;
}

interface GenerationIv {
  "diamond-pearl": Sprites;
  "heartgold-soulsilver": Sprites;
  platinum: Sprites;
}

interface Versions {
  "generation-i": GenerationI;
  "generation-ii": GenerationIi;
  "generation-iii": GenerationIii;
  "generation-iv": GenerationIv;
  "generation-v": GenerationV;
  "generation-vi": { [key: string]: Home };
  "generation-vii": GenerationVii;
  "generation-viii": GenerationViii;
}

interface Sprites {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
  other?: Other;
  versions?: Versions;
  animated?: Sprites;
}

interface GenerationI {
  "red-blue": RedBlue;
  yellow: RedBlue;
}

interface RedBlue {
  back_default: null;
  back_gray: null;
  back_transparent: null;
  front_default: null;
  front_gray: null;
  front_transparent: null;
}

interface GenerationIi {
  crystal: Crystal;
  gold: Gold;
  silver: Gold;
}

interface Crystal {
  back_default: null;
  back_shiny: null;
  back_shiny_transparent: null;
  back_transparent: null;
  front_default: null;
  front_shiny: null;
  front_shiny_transparent: null;
  front_transparent: null;
}

interface Gold {
  back_default: null | string;
  back_shiny: null | string;
  front_default: null | string;
  front_shiny: null | string;
  front_transparent?: null;
}

interface GenerationIii {
  emerald: OfficialArtwork;
  "firered-leafgreen": Gold;
  "ruby-sapphire": Gold;
}

interface OfficialArtwork {
  front_default: string;
  front_shiny: string;
}

interface Home {
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
}

interface GenerationVii {
  icons: DreamWorld;
  "ultra-sun-ultra-moon": Home;
}

interface DreamWorld {
  front_default: string;
  front_female: null;
}

interface GenerationViii {
  icons: DreamWorld;
}

interface Other {
  dream_world: DreamWorld;
  home: Home;
  "official-artwork": OfficialArtwork;
}

interface Stat {
  base_stat: number;
  effort: number;
  stat: Species;
}

interface Type {
  slot: number;
  type: Species;
}
