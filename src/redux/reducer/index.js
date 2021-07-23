import { combineReducers } from 'redux';
import { pokemonReducer } from './pokemonReducer';
const reducers = combineReducers({
  allpokemons: pokemonReducer
});

export default reducers;
