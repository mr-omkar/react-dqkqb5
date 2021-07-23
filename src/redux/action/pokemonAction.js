import { ActionType } from '../contants/action-type';

export const setPokemons = pokemons => {
  return {
    type: ActionType.SET_POKEMONS,
    payloads: pokemons
  };
};
