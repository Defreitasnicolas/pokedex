const NavBar = ({ pokemonIndex, setPokemonIndex, pokemonList }) => {
  return (
    <div>
      {pokemonIndex > 0 ? (
        <button onClick={() => setPokemonIndex(pokemonIndex - 1)}>
          Precedent
        </button>
      ) : (
        ""
      )}
      {pokemonIndex < pokemonList.length - 1 ? (
        <button onClick={() => setPokemonIndex(pokemonIndex + 1)}>
          suivant
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default NavBar;
