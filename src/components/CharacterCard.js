import { Link } from "react-router-dom";

const CharacterCard = ({ house }) => {
  const translateSpecies = () => {
    if (house.species === "human") {
      return "Humano";
    } else if (house.species === "half-giant") {
      return "Medio gigante";
    } else if (house.species === "werewolf") {
      return "Hombre lobo";
    } else if (house.species === "ghost") {
      return "Fantasma";
    }
  };
  return (
    <Link to={`/character/${house.id}`}>
      <img
        className={`section-${house.house}__list--img`}
        src={
          house.image === ""
            ? `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.letribunaldunet.fr%2Fwp-content%2Fuploads%2F2020%2F06%2Fharry-potter-2.jpg&f=1&nofb=1`
            : house.image
        }
        alt={`Foto de ${house.name}`}
      />
      <h3 className={`section-${house.house}__list--h3`}>{house.name}</h3>
      <p className={`section-${house.house}__list--text`}>
        {translateSpecies()}
      </p>
    </Link>
  );
};

export default CharacterCard;
