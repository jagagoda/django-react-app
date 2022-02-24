import React from 'react'
import MainContainer from '../MainContainer.jsx/MainContainer'

const Chart = (props) => {
const { data } = props

  return (
   <MainContainer data={data} text='Chart' dataEl={data.wind}/>
  )
}

export default Chart