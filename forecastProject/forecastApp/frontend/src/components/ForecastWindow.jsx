import React from 'react'
import InputCity from './InputCity'


const ForecastWindow = (props) => {
  const {download} = props;
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh' }}>
      <div style={{ minHeight: '700px', minWidth: '600px', boxShadow: '10px 10px 10px black', background: 'linear-gradient(45deg, black, transparent)', display: 'flex', justifyContent: 'center', borderRadius: '20px', paddingTop: "30px" }}>
        <InputCity download={download}/>
      </div>
    </div>
  )
}

export default ForecastWindow