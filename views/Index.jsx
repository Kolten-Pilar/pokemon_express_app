import React from "react";

const myStyle = {
  color: '#fff',
  backgroundColor: '#000'
}

function Index({ pokemon }) {
  return (
    <div style={myStyle}>
      <h1>See All The Pokemon</h1>
      {pokemon.map((pokemon, i) => {
        return (
          <li key={i}>
            <a href={`/pokemon/${i}`}>{pokemon.name}</a> {pokemon.img} <br />
          </li>
        );
      })}
    </div>
  );
}

export default Index;
