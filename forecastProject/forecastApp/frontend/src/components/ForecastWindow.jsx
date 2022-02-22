import React from 'react'
import InputCity from './InputCity'
import styled from 'styled-components';

const ForecastCard = styled.div`
display: flex;
justify-content: space-between;
flex-direction: row;
width: 100%;
padding-top: 5em;
`;
const ForecastContainer = styled.div`
display: flex;
justify-content: start;
align-items: center;
flex-direction: column;
height: 100vh;
`;
const Forecast = styled.div`
padding: 15px;
height: 500px;
width: 800px;
box-shadow: 10px 10px 10px black;
background: linear-gradient(45deg, black, transparent);
display: flex;
justify-content: start;
align-items: center;
flex-direction: column;
border-radius: 20px;
padding-top: 30px;
`;

const Leftside = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
text-align: left;
padding-left: 4em;
.weather-icon {
height: 100px;
width: 100px;
}
`;

const RightSide = styled.div`
text-align: left;
padding-right: 2em;
`;

const ForecastWindow = (props) => {
  const { download, data } = props;
  if (!data) {
    return null;
  }
  return (
    <ForecastContainer>
      <Forecast>
        <InputCity download={download} />
        <ForecastCard>
          {data ?
            <>
              <Leftside>
                <img className='weather-icon' src={`http://openweathermap.org/img/w/${data.icon}.png`}
                  alt="weather img" />
                <h1>{data.description}</h1>
              </Leftside>
              <RightSide>
                <h1>Humidity: {data.humidity} %</h1>
                <h1>Temperature: {data.temp} °C</h1>
                <h1>Pressure: {data.pressure} hPa</h1>

              </RightSide>
            </> : <>
            <h1> What's the weather like today?</h1>
            </>}
        </ForecastCard>
      </Forecast>
    </ForecastContainer>
  )
}

export default ForecastWindow