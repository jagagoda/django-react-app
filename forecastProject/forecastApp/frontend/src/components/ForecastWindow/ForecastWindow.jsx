import React, { useState } from 'react'
import InputCity from '../InputCity/InputCity'
import { ForecastContainer, ForecastCard, ForecastGrid, LeftGrid, RightGrid, GridItem, GridData, ItemContainer, CityName, NextButton, PreviousButton, ButtonContainer } from './Styles';
import { GrNext, GrPrevious } from 'react-icons/gr'
import WeatherData from '../WeatherData/WeatherData';


const ForecastWindow = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const { download, data } = props;
  if (!data) {
    return null;
  }
  return (
    <ForecastContainer>
      <ForecastCard>
        <InputCity download={download} />
        <CityName>{data.name}</CityName>
        <ForecastGrid>
          {data ?
            <>
              <LeftGrid>
                <img className='weather-icon' src={`http://openweathermap.org/img/w/${data.icon}.png`}
                  alt="weather img" />
                <h2>{data.description}</h2>
              </LeftGrid>
              <RightGrid>
                <WeatherData title='Humidity:' data={data.humidity} />
                <WeatherData title='Temperature:' data={data.temp} />
                <WeatherData title='Pressure:' data={data.pressure} />
              </RightGrid>
            </> : <>
              <div> What's the weather like today?</div>
            </>}
        </ForecastGrid>
      </ForecastCard>
      <ButtonContainer>
        <PreviousButton><GrPrevious size={25} style={{ position: 'absolute', left: '-5%', top: '6px' }} />previous day</PreviousButton>
        <NextButton>next day<GrNext size={25} style={{ position: 'absolute', right: '-6%', top: '6px' }} /></NextButton>
      </ButtonContainer>
    </ForecastContainer>
  )
}

export default ForecastWindow