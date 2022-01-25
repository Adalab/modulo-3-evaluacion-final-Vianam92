import { useState, useEffect } from "react";
import "../styles/App.scss";
import getApi from "../services/Api";
import Filters from "./Filters";
import CharacterList from "./CharacterList";

function App() {
  const [house, setHouse] = useState([]);
  const [searchHouse, setsearchHouse] = useState("gryffindor");
  const [searchName, setSearchName] = useState("");

  //get Api
  useEffect(() => {
    getApi(searchHouse).then((data) => setHouse(data));
  }, [searchHouse]);

  //handlers
  const handleSearch = (data) =>{
    if(data.key === "house"){
      setsearchHouse(data.value);
    }else if(data.key === "character"){
      setSearchName(data.value);
    }
  };

  return (
    <>
      <Filters handleSearch={handleSearch} value={searchName} valueHouse={searchHouse}/>
      <CharacterList character={house}/>
    </>
  );
}

export default App;
