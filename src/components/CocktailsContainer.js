import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import CocktailDetail from './cocktailDetail'
import CocktailShow from './cocktailShow'

class CocktailsContainer extends React.Component {

  state = {
    cocktails: [],
    cocktail: {}
  }

  componentDidMount(){
    this.fetchCocktails()
  }

  fetchCocktails = () => {
    fetch('http://localhost:3333/api/v1/cocktails/')
    .then(res => res.json())
    .then(res => this.setState({
      cocktails: res
    }))
  }

  fetchCocktail = (id) => {
    fetch(`http://localhost:3333/api/v1/cocktails/${id}`)
    .then(res => res.json())
    .then(res => this.setState({
      cocktail: res
    }))
  }

  render() {
    return(
      <div>
        <Router>
         <div>
           <Route exact path="/cocktails/" render={()=>(
              <CocktailDetail
                fetchCocktail={this.fetchCocktail}
                cocktails={this.state.cocktails}
              />
           )} />
           <Route path="/cocktails/:id/" render={() => (
              <CocktailShow
                cocktail={this.state.cocktail}
              />
           )} />
         </div>
       </Router>
      </div>
    )
  }
}

export default CocktailsContainer
