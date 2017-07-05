import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Icon } from 'semantic-ui-react'

class NavBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render(){
    const { activeItem } = this.state
    return(
      <Menu>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
          <NavLink to='/'>Home</NavLink>
        </Menu.Item>

        <Menu.Item name='cocktails' active={activeItem === 'cocktails'} onClick={this.handleItemClick}>
          <NavLink to='/cocktails'>Cocktails</NavLink>
        </Menu.Item>

        <Menu.Item name='new' active={activeItem === 'new'} onClick={this.handleItemClick}>
          <NavLink to='/cocktails/new'>Add New Cocktail</NavLink>
        </Menu.Item>
      </Menu>
    )
  }
}

export default NavBar
