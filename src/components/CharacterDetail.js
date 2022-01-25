import { Link } from "react-router-dom";

const CharacterDetail = ({ house }) => {
  return house === undefined?"Personaje no encontrado":(
    <section>
      <Link to="/">Volver Atrás</Link>
      <h2>Detalle del personaje</h2>
      <img
        src={
          house.image === ""
            ? "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.letribunaldunet.fr%2Fwp-content%2Fuploads%2F2020%2F06%2Fharry-potter-2.jpg&f=1&nofb=1"
            : house.image
        } alt={`Foto de ${house.name}`}
        title={`Foto de ${house.name}`}
      />
      <h3>{house.name}</h3>
      <h3>{`${house.status}:Viva`}</h3>
      <h3>{`Especie: ${house.species}`}</h3>
      <h3>{`Género: ${house.gender}`}</h3>
      <h3>{`Casa: ${house.house}`}</h3>
    </section>
  );
};

export default CharacterDetail;
