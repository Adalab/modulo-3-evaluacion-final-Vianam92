import { useState, useEffect } from "react";
import "../styles/App.scss";
import getApi from "../services/Api";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import { Route, Switch, useRouteMatch } from "react-router-dom";

function App() {
  const [house, setHouse] = useState([]);
  const [searchHouse, setsearchHouse] = useState("gryffindor");
  const [searchName, setSearchName] = useState("");

  //get Api
  useEffect(() => {
    getApi(searchHouse).then((data) => setHouse(data));
  }, [searchHouse]);

  console.log(house);

  //handlers
  const handleSearch = (data) => {
    if (data.key === "house") {
      setsearchHouse(data.value);
    } else if (data.key === "character") {
      setSearchName(data.value);
    }
  };

  const filteredHouse = house.filter((character) => {
    return character.name.toLowerCase().includes(searchName.toLowerCase());
  });

  const routeId = useRouteMatch("/character/:id");

  const renderCharacterDetail = () => {
    if(routeId){
      const routeIdHouse = routeId.params.id;
      return house.find(character => {
        return character.id === routeIdHouse;
      });
    };
  };

  return (
    <>
      <header>
        <h1>Buscador de Personajes de Harry Potter</h1>
      </header>
      <Switch>
        <Route path="/" exact>
          <Filters
            handleSearch={handleSearch}
            value={searchName}
            valueHouse={searchHouse}
          />
          <CharacterList character={filteredHouse} />
        </Route>
        <Route path="/character/:id">
          <CharacterDetail house={renderCharacterDetail()}/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
