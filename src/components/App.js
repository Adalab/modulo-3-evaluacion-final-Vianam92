import { useState, useEffect } from "react";
import "../styles/Header.scss";
import "../styles/Reset.scss";
import "../styles/App.scss";
//imagenes
import getApi from "../services/Api";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import Header from "./Header";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ls from "../services/LocalStorage";

function App() {
  const [house, setHouse] = useState(ls.get("house",[]));
  const [searchHouse, setsearchHouse] = useState(ls.get("searchHouse","Gryffindor"));
  const [searchGender, setSearchGender] = useState(ls.get("searchGender","Any"));
  const [searchName, setSearchName] = useState(ls.get("searchName", ""));

  //get Api
  useEffect(() => {
    getApi().then((data) => setHouse(data));
  }, []);

  //local Storage
  useEffect(() => {
    ls.set('house', house);
    ls.set('searchName', searchName);
    ls.set('searchGender', searchGender);
    ls.set('searchHouse', searchHouse);
  }, [house, searchName, searchGender, searchHouse]);

  //handlers
  const handleSearch = (data) => {
    if (data.key === "house") {
      setsearchHouse(data.value);
    } else if (data.key === "character") {
      setSearchName(data.value);
    } else if(data.key === "gender"){
      setSearchGender(data.value);
    }
  };

  //reset
  const handleResetBtn = () =>{
    setsearchHouse("Gryffindor");
    setSearchGender("Any");
    setSearchName("");
  };

  const filteredHouse = house
    .filter((character) => {
      return character.name.toLowerCase().includes(searchName.toLowerCase());
    })
    .filter(eachCharacter => searchHouse === "Gryffindor" ? eachCharacter.house === "Gryffindor":searchHouse === eachCharacter.house
    )
    .filter(eachCharacter => searchGender === "Any"? eachCharacter.gender : eachCharacter.gender===searchGender);

  const routeId = useRouteMatch("/character/:id");

  const renderCharacterDetail = () => {
    if (routeId) {
      const routeIdHouse = routeId.params.id;
      console.log(routeIdHouse);
      return house.find(character => {
        return character.id === parseInt(routeIdHouse);
      });
    }
  };

  return (
    <>
     <Header/>
     <main>
      <Switch>
        <Route path="/" exact>
          <Filters
            handleSearch={handleSearch}
            value={searchName}
            valueHouse={searchHouse}
            valueGender={searchGender}
            handleResetBtn={handleResetBtn}
            character={filteredHouse}
          />
          <CharacterList character={filteredHouse} valueHouse={searchHouse} />
        </Route>
        <Route path="/character/:id">
          <CharacterDetail house={renderCharacterDetail()} />
        </Route>
      </Switch>
      </main>
    </>
  );
}

export default App;
