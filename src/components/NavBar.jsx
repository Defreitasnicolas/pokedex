const NavBar = ({ pokemonList, setPokemonIndex }) => {
  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <button onClick={() => setPokemonIndex(index)} key={pokemon.name}>
          {pokemon.name}
        </button>
      ))}
    </div>
  );
};

export default NavBar;
