const FiltersName = (props) => {
    const handleSearch = eve =>{
        props.handleSearch({
          key:"character",
          value:eve.target.value,
        });
    }
  return (
    <>
      <label htmlFor="character">Busca por Personaje</label>
      <input name="character" id="character" value={props.searchName} onChange={handleSearch}/>
    </>
  );
};

export default FiltersName;
