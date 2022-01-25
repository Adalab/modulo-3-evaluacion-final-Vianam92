const FiltersHouse = (props) =>{
    const handleChangeHouse = (eve) =>{
        props.handleSearch({
            key:"house",
            value:eve.target.value,
        })
    }
return(
    <>
    <label htmlFor="house">Selecciona la casa:</label>
    <select id="house" name="house" onChange={handleChangeHouse} value={props.searchHouse}>
        <option value="gryffindor">Gryffindor</option>
        <option value="hufflepuff">Hufflepuff</option>
        <option value="ravenclaw">Ravenclaw</option>
        <option value="slytherin">Slytherin</option>
    </select>
    </>
)
};

export default FiltersHouse;