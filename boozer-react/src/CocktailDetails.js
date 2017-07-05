import React, { Component } from 'react'
import Cocktail from './Cocktail'

class CocktailDetails extends Component{
  state = {
    cocktail: undefined,
    isNotFound: false,
  }

  fetchCocktails(nextProps){
    const baseURL = 'http://localhost:3000/api/v1/cocktails/'
    fetch(baseURL + nextProps.match.params.cocktailId)
    .then(res => res.json())
    .then(jsonRes => {
      this.setState({
        ...this.state,
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

  componentWillReceiveProps(nextProps){
    this.fetchCocktails(nextProps)
  }

  componentWillMount(){
    this.fetchCocktails(this.props)
  }

  shouldComponentUpdate(nextProps, nextState){
    return (this.state.cocktail !== nextState.cocktail)
  }

  loading(){
    if (this.state.cocktail) {
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
