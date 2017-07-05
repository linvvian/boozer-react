import React from 'react'

const Cocktail = ({ name, source, description, instructions, proportions }) => {
  return(
    <div className='cocktail'>
      <h2>{name}</h2>
      <h4>Source</h4>
      <p>{source}</p>
      <p>{description}</p>
      <h5>Instructions</h5>
      <p>{instructions}</p>
      <h5>Ingredients</h5>
      <ul>
        {proportions.map(portion => {
          return <li key={portion.id+portion.ingredient_name}>{portion.ingredient_name}: {portion.amount}</li>
        })}
      </ul>
    </div>
  )
}

export default Cocktail
