import React from "react";

const myStyle = {
  color: "#fff",
  backgroundColor: "#000",
};

function Index({ pokemon }) {
  return (
    <div style={myStyle}>
      <h1>See All The Pokemon</h1>
      {pokemon.map((pokemon, i) => {
        const capitalName = (pokemon.name).charAt(0).toUpperCase() + (pokemon.name).slice(1) //slice starts at the second character then returns the rest of the letters
        return (
          <ul key={i}>
            <li >
              <a href={`/pokemon/${i}`}>{capitalName}</a><br />
            </li>
          </ul>
        );
      })}
    </div>
  );
}

module.exports = Index;
