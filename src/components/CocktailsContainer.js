import React from 'react'
import CocktailDetail from './cocktailDetail'

class CocktailsContainer extends React.Component {

  state = {
    cocktails: []
  }

  componentDidMount(){
    this.fetchCocktails()
  }

  fetchCocktails(){
    fetch('http://localhost:3333/api/v1/cocktails/')
    .then( res => res.json())
    .then( res => this.setState({
      cocktails: res
    }))
  }

  render(){
    return(
      <div>
        <CocktailDetail cocktails={this.state.cocktails}/>
      </div>
    )
  }
}

export default CocktailsContainer
