import React from 'react';
import { useEffect } from 'react';
import './style.css';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PokemonList } from './containers/poke-list.js';

export default function App() {
  // useEffect(() => {
  //   fetchPokes();
  // }, []);
  // const fetchPokes = async () => {
  //   const response = await axios
  //     .get('https://pokeapi.co/api/v2/pokemon')
  //     .catch(err => {
  //       console.log('Err: ', err);
  //     });
  //   // dispatch(setProducts(response.data));
  //   console.log(response.data.results);
  console.log('inside appjs');
  // };
  return (
    <div>
      <PokemonList />
    </div>
  );
}
