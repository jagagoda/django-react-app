import React from 'react'
import { ItemContainer, GridItem, GridData } from '../ForecastWindow/Styles'

const WeatherData = (props) => {
  const {title, data } = props;
  return (
    <ItemContainer>
      <GridItem>{title}</GridItem>
      <GridData>{data}</GridData>
    </ItemContainer>
  )
}

export default WeatherData