import CharacterCard from "./CharacterCard";


const CharacterList = ({ character }) => {
  const characters = character.map((house) => {
    return (
      <li key={house.id} id={house.id}>
        <CharacterCard house={house} />
      </li>
    );
  });
  return (
    <section>
        <ul>{characters}</ul>
    </section>
  );
};

export default CharacterList;
