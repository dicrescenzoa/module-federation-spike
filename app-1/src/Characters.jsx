import React from "react";
import useAxios from "axios-hooks";

const Characters = () => {
  const [{ data, loading, error }] = useAxios(
    'https://rickandmortyapi.com/api/character'
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <div style={{display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap'}}>
      {data.results.map((character) => {
        return (
          <div>
            <img src={character.image} alt=""/>
            <p>{character.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Characters;
