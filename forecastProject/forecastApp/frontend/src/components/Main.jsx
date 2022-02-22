import React from 'react'
import ForecastWindow from './ForecastWindow'
import Navbar from './Navbar'
import styled from 'styled-components'

const Styles = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 100vh;
padding-top: 25px;
`;
const Main = (props) => {
const {data, download} = props;
  return (
    <Styles>
      <Navbar data={data} />
      <ForecastWindow data={data} download={download} />
    </Styles>
  )
}

export default Main