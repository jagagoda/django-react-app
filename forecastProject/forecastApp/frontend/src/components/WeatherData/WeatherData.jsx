import React from 'react'
import { ItemContainer, GridItem, GridData, Icon } from './Styles'

const WeatherData = (props) => {
  const { title, data, icon, units } = props;
  return (
    <ItemContainer>
      <GridItem>
        <Icon>{icon}</Icon>
        {title}
      </GridItem>
      <GridData>{data}{units}</GridData>
    </ItemContainer>
  )
}

export default WeatherData