import { ActionType } from '../contants/action-type.js';

const initialState = {
  pokemons: []
};

export const pokemonReducer = ((state = initialState),
(type, payload) => {
  switch (type) {
    case ActionType.SET_POKEMONS:
      return { ...state, pokemons: payload };
    default:
      return state;
  }
});
