import React from 'react'
import { Route } from 'react-router-dom'
import { Grid, Progress } from 'semantic-ui-react'

import CocktailDetails from './CocktailDetails'
import CocktailsList from './CocktailsList'

import CocktailRouter from './CocktailRouter'

class CocktailsContainer extends React.Component {
  state = {
    cocktails: undefined,
  }

  fetchCocktails(){
    fetch('http://localhost:3000/api/v1/cocktails')
    .then(res => res.json())
    .then(resJson => {
      this.setState({
        cocktails: [...resJson]
      })
    })
  }

  componentWillMount(){
    this.fetchCocktails()
  }

  loading(){
    if(this.state.cocktails){
      return <CocktailsList {...this.state} />
    } else {
      return (
        <Progress percent={100} active />
      )
    }
  }

  showDetails(){
    return <CocktailRouter />
  }

  render(){
    return (
      <div>
        <Grid column={2} padded>
          <Grid.Column floated='left' width={4}>
            {this.loading()}
          </Grid.Column>
          <Grid.Column floated='right' width={12}>
            {this.showDetails()}
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default CocktailsContainer
