import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
import { Feed, Header } from 'semantic-ui-react'



const Cocktail = (props) => {
  return(

    <Feed size='small'>
    <Feed.Event>
      <Feed.Content>
      <Link to={`/cocktails/${props.id}`} onClick={ () => props.fetchCocktail(props.id) }>{props.name}</Link>
      </Feed.Content>
    </Feed.Event>
    </Feed>

  )
}

const CocktailDetail = (props) => {
  return (
    <div className='panel'>{props.cocktails.map((cocktail) => {
      return <Cocktail fetchCocktail={props.fetchCocktail} {...cocktail} />
    })}</div>
  )
}

export default CocktailDetail
