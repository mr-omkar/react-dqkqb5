// import React from 'react';
import { useSelector } from 'redux';
// import { Link } from 'react-router-dom';

const PokeComp = () => {
  const pokemons = useSelector(state => state.allpokemons.pokemons);
  const displayList = pokemons.map(pokemon => {
    console.log(`new ${pokemon}`);
  });
};
export default PokeComp;
