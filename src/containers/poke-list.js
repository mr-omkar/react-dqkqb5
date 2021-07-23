import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'redux';
import { setPokemons } from '/redux/action/productAction.js';
import PokeComp from './pokeComp.js';

const PokemonList = () => {
  const dispatch = useDispatch();

  const fetchPokes = async () => {
    const response = await axios
      .get('https://pokeapi.co/api/v2/pokemon')
      .catch(err => {
        console.log('Err: ', err);
      });
    // dispatch(setProducts(response.data));
    console.log(response.data.results);
    dispatch(setPokemons(response.data.results));
  };
  useEffect(() => {
    fetchPokes();
  }, []);
  return (
    <>
      <div className="row" />
      <PokeComp />
    </>
  );
};
export default PokemonList;
