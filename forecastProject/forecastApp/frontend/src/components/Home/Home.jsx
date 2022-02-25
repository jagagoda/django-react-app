import React from 'react'
import ForecastWindow from '../ForecastWindow/ForecastWindow'
import Navbar from '../Navbar/Navbar'
import { Styles } from './Styles'

const Home = (props) => {

  const { data, download, bookmark, active } = props;
  if (!data) {
    return null;
  }
  return (
    <Styles>
      <Navbar data={data} />
      <ForecastWindow data={data} download={download} bookmark={bookmark} active={active} />
    </Styles>
  )
}

export default Home