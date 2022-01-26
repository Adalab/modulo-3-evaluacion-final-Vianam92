import { Link } from "react-router-dom";
import CharacterNotFound from "./CharacterNotFound";
import "../styles/CharacterDetail.scss";

const CharacterDetail = ({ house }) => {
  return house === undefined?<CharacterNotFound/>:(
    <section className={`section-${house.house}`}>
      <Link to="/" className={`section-${house.house}__link`}>Volver Atrás</Link>
      <h2 className={`section-${house.house}__title`}>Detalle del personaje</h2>
      <img className={`section-${house.house}__image`}
        src={
          house.image === ""
            ? "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.letribunaldunet.fr%2Fwp-content%2Fuploads%2F2020%2F06%2Fharry-potter-2.jpg&f=1&nofb=1"
            : house.image
        } alt={`Foto de ${house.name}`}
        title={`Foto de ${house.name}`}
      />
      <h3 className={`section-${house.house}__detail`}>{house.name}</h3>
      <h3 className={`section-${house.house}__detail`}>{`Status: ${house.alive === true?"Viva":"muerta"}`}</h3>
      <h3 className={`section-${house.house}__detail`}>{`Especie: ${house.species}`}</h3>
      <h3 className={`section-${house.house}__detail`}>{`Género: ${house.gender}`}</h3>
      <h3 className={`section-${house.house}__detail`}>{`Casa: ${house.house}`}</h3>
    </section>
  );
};

export default CharacterDetail;
