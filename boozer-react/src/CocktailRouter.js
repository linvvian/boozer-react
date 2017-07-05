import React from 'react'
import {Switch, Route} from 'react-router-dom'

import CocktailDetails from './CocktailDetails'
import AddCocktailForm  from './AddCocktailForm'

const CocktailRouter = () => {
  return(
    <Switch>
      <Route exact path='/cocktails/new' render={props => <AddCocktailForm {...props}/>} />
      <Route path='/cocktails/:cocktailId' render={props => <CocktailDetails {...props}/>} />
    </Switch>
  )
}

export default CocktailRouter
