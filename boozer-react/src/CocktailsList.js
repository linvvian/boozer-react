import React from 'react'
import { Link } from 'react-router-dom'
import { List, Icon } from 'semantic-ui-react'

const CocktailsList = ({ cocktails }) => {
  return (
    <List className='cocktailList'>
      {cocktails.map(cocktail => {
        return (
          <List.Item key={cocktail.id + '_' + cocktail.name}>
            <List.Icon name='cocktail'/>
            <List.Content><Link to={'/cocktails/'+cocktail.id}>{cocktail.name}</Link></List.Content>
          </List.Item>
        )
      })}
    </List>
  )
}

export default CocktailsList
