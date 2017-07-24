import React from 'react'
import '../index.css'

const CocktailShow = ({cocktail}) => {
    console.log(cocktail)
    if(cocktail.name){
      return (
        <div className='cocktailShow'>
        <h1>{cocktail.name}</h1>
        <ul>
          <li>{cocktail.description}</li>
          <li>{cocktail.instructions}</li>
        </ul>
      </div>
    )
    } else {
      return(
        <div>
          <h1> Loading </h1>
        </div>
      )
    }
}

export default CocktailShow
