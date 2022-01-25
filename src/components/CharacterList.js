import CharacterCard from './CharacterCard';

const CharacterList = ({character}) =>{
const characters =  character.map((house,index) =>{
    return(
        <li key={index} id={index}>
            <CharacterCard house={house}/>
        </li>
    )
})
return (
    <section>
        <ul>
            {characters}
        </ul>
    </section>
)
};

export default CharacterList;