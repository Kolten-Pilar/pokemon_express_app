import React from 'react'

const myStyle = {
  color: "#fff",
  background: "-moz-linear-gradient(top, #000 0%, #94989B 50%, #000 100%)",
  background: "-webkit-linear-gradient(top, #000 0%, #94989B 50%, #000 100%)",
  background: "linear-gradient(to bottom, #000 0%, #94989B 50%, #000 100%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  fontSize: "30px",
};

function Show( {pokemon} ) {
  const capitalName =
          pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  console.log(pokemon);
  const updatedUrl = `${pokemon.img}.jpg`
  return (
    <div style={myStyle}>
      <h1>Gotta Catch 'Em All</h1>
      <h2>{capitalName}</h2>
      <img src={updatedUrl}/> 
      <a href={`/pokemon`} ><br/>Back</a>
      </div>
  )
}

module.exports = Show;