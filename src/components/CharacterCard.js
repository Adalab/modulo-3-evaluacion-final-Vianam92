import { Link } from "react-router-dom";

const CharacterCard = ({ house }) => {
  return (
  
    <Link to={`/character/${house.id}`}>
      <img
        src={
          house.image === ""
            ? `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.letribunaldunet.fr%2Fwp-content%2Fuploads%2F2020%2F06%2Fharry-potter-2.jpg&f=1&nofb=1`
            : house.image
        }
        alt={`Foto de ${house.name}`}
      />
      <h3>{house.name}</h3>
      <p>{house.species}</p>
      </Link>

  );
};

export default CharacterCard;
