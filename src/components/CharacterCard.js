const CharacterCard = ({ house }) => {
  return (
    <>
      <img src={house.image} alt={`Foto de ${house.name}`} />
      <h3>{house.name}</h3>
      <p>{house.species}</p>
    </>
  );
};

export default CharacterCard;
