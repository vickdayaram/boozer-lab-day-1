import React from 'react'

const Cocktail = (props) => {
  return(
    <div> {props.name} </div>
  )
}

const CocktailDetail = ({cocktails}) => {

  return(
    <div>
    {cocktails.map(Cocktail)}
    </div>
  )
}

export default CocktailDetail
