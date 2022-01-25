import { v4 as uuid } from 'uuid';

const getApi = (searchHouse) => {
  return fetch(
    `http://hp-api.herokuapp.com/api/characters/house/${searchHouse}`
  )
    .then((response) => response.json())
    .then((data) => {
      const result = data.map((item, index) => {
        return {
          id:uuid(),
          name: item.name,
          alive: item.alive,
          gender: item.gender,
          house: item.house,
          image: item.image,
          species: item.species,
          wizard: item.wizard,
        };
      });
      return result;
    });
};

export default getApi;
