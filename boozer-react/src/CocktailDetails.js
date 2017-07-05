import React, { Component } from 'react'
import Cocktail from './Cocktail'

class CocktailDetails extends Component{
  state = {
    cocktail: undefined,
    isNotFound: false,
  }

  fetchCocktails(){
    const baseURL = 'http://localhost:3000/api/v1/cocktails/'
    fetch(baseURL + this.props.match.params.cocktailId)
    .then(res => res.json())
    .then(jsonRes => {
      this.setState({
        cocktail: {...jsonRes},
        isNotFound: false,
      })
    })
    .catch(error => {
      console.log(error)
      this.setState({
        isNotFound: true,
      })
    })
  }

  shouldComponentUpdate(nextProps, nextState){
    return (this.state.cocktail !== nextState.cocktail)
  }

  componentWillMount(){
    this.fetchCocktails()
  }

  componentWillUpdate(){
    this.fetchCocktails()
  }

  loading(){
    if (this.state.cocktail && !this.state.isNotFound) {
      return <Cocktail {...this.state.cocktail} />
    } else {
      console.log('Error')
    }
  }

  render(){
    return(
      <div>
        {this.loading()}
      </div>
    )
  }
}

export default CocktailDetails
