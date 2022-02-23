import React from 'react'
import ForecastWindow from '../ForecastWindow/ForecastWindow'
import Navbar from '../Navbar/Navbar'
import { Styles } from './Styles'

const Home = (props) => {
const {data, download} = props;
  return (
    <Styles>
      <Navbar data={data} />
      <ForecastWindow data={data} download={download} />
    </Styles>
  )
}

export default Home