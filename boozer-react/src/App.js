import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import NavBar from './NavBar'
import CocktailsContainer from './CocktailsContainer'
import AddCocktailForm from './AddCocktailForm'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path='/' />
          <Route path='/cocktails' component={CocktailsContainer} />
          <Route exact path='/new' component={AddCocktailForm} />
        </div>
      </Router>
    )
  }
}

export default App;
