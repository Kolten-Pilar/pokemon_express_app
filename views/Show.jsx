import React from 'react'

function Show( {pokemon} ) {
  console.log(pokemon);
  const updatedUrl = `${pokemon.img}.jpg`
  return (
    <div>
      <h1>Gotta Catch 'Em All</h1>
      <h2>{pokemon.name}</h2>
      <img src={updatedUrl}/> 
      <a href={`/pokemon`} ><br/>Back</a>
      </div>
  )
}

module.exports = Show;