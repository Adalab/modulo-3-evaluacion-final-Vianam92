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
        <option value="hufflepuf">Hufflepuf</option>
        <option value="ravenclaw">Ravenclaw</option>
        <option value="Slytherin">Slytherin</option>
    </select>
    </>
)
};

export default FiltersHouse;