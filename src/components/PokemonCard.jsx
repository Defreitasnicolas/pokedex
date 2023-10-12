import PropTypes from "prop-types";

const PokemonCard = ({ pokemon }) => {
  const imageok = pokemon.imgSrc ? (
    <img src={pokemon.imgSrc} alt={pokemon.name} />
  ) : (
    <p>???</p>
  );

  PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string.isRequired,
    }).isRequired,
  };

  return (
    <>
      <div>{pokemon.name}</div>
      <div>{imageok}</div>
    </>
  );
};

export default PokemonCard;
