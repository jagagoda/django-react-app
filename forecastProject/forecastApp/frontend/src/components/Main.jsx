import React from 'react'
import ForecastWindow from './ForecastWindow'
import Navbar from './Navbar'

const Main = (props) => {
const {data, download} = props;
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh'}}>
      <Navbar data={data} />
      <ForecastWindow data={data} download={download} />
    </div>
  )
}

export default Main