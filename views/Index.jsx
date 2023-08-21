import React from "react";

const myStyle = {
  color: "#fff",
  background:
    "-moz-linear-gradient(top, #000 0%, #94989B 50%, #000 100%)",
  background:
    "-webkit-linear-gradient(top, #000 0%, #94989B 50%, #000 100%)",
  background:
    "linear-gradient(to bottom, #000 0%, #94989B 50%, #000 100%)",
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
};

const h1Style = {
  fontSize: '50px',
  fontWeight: '600'
}

const listStyle = {
  fontSize: '25px'
}

function Index({ pokemon }) {
  return (
    <div style={myStyle}>
      <h1 style={h1Style}>See All The Pokemon</h1>
      <nav>
        <a href="/new">Create a New Pokemon!</a>
      </nav> <br/>
      {pokemon.map((pokemon, i) => {
        const capitalName =
          pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1); //slice starts at the second character then returns the rest of the letters
        return (
          <ul key={i}>
            <li style={listStyle}>
              <a href={`/pokemon/${i}`}>{capitalName}</a>
              <br />
            </li>
          </ul>
        );
      })}
    </div>
  );
}

module.exports = Index;
