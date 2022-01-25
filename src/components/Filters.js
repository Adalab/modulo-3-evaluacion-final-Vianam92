import FiltersName from "./FiltersName";
import FiltersHouse from "./FiltersHouse";

const Filters = (props) => {
  return (
    <form action="" onSubmit={(ev) => ev.preventDefault()}>
      <FiltersName handleSearch={props.handleSearch} searchName={props.value}/>
      <FiltersHouse searchHouse={props.valueHouse} handleSearch={props.handleSearch}/>
    </form>
  );
};

export default Filters;
