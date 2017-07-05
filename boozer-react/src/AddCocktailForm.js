import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Button, Checkbox, Form } from 'semantic-ui-react'

class AddCocktailForm extends Component {
  state = {
    name: undefined,
    source: '',
    description: '',
    instructions: '',
    ingredients: [],
    amounts: [],
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (!this.state.name) return

    const postUrl = 'http://localhost:3000/api/v1/cocktails'
    const proportions = this.state.amounts.map((amount, index) => {
      return {
        amount: amount,
        ingredient: this.state.ingredients[index]
      }
    })
    let body = {
      ...this.state,
      proportions: proportions
    }
    let resp = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(body)
    }
    fetch(postUrl, resp)
    .catch((error) => {
      console.log(error.message)
    })
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      ...this.state,
      [name]: value,
    })
  }

  handleIngredientsChange = (event) => {
    const { name, value, className } = event.target
    let changeTarget
    if (className === 'ingredients') {
      changeTarget = [...this.state.ingredients]
    } else {
      changeTarget = [...this.state.amounts]
    }
    changeTarget[name] = value
    this.setState({
      [className]: [...changeTarget]
    })
  }

  moreIngredients = (e) => {
    e.preventDefault()
    this.setState({
      ingredients: [...this.state.ingredients, this.state.ingredients.length]
    })
  }

  render(){
    return (
      <div className='newCocktailForm'>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Name:</label>
            <input type='text' name='name' placeholder='name' onChange={this.handleChange}/>
          </Form.Field>
          <Form.Field>
            <label>Source</label>
            <input type='text' name='source' placeholder='source' onChange={this.handleChange}/>
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <textarea name='description' placeholder='description' onChange={this.handleChange}/>
          </Form.Field>
          <Form.Field>
            <label>Instructions To Make</label>
            <textarea name='instructions' placeholder='instructions' onChange={this.handleChange}/>
          </Form.Field>
          <Form.Field>
            <label>Ingredient And Amount</label>
              {this.state.ingredients.map((input, index) => {
                return (
                  <div className='newIngredients'>
                    <Form.Group widths='equal' inline>
                      <label>Ingredient</label>
                      <input type='text' className='ingredients' name={index} onChange={this.handleIngredientsChange}/>
                      <label>Amount</label>
                      <input type='text' className='amounts' name={index} onChange={this.handleIngredientsChange} />
                    </Form.Group>
                  </div>
                )
              })}
              <Button id='morePortions' onClick={this.moreIngredients}>Add Ingredients</Button>
          </Form.Field>
          <Button id='submit' type='submit'>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default AddCocktailForm
