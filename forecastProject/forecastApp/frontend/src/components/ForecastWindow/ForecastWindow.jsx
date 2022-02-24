import React, { useState } from 'react'
import InputCity from '../InputCity/InputCity'
import { ForecastContainer, ForecastCard, ForecastGrid, LeftGrid, RightGrid, CityName, NextButton, PreviousButton, ButtonContainer, BeforeWeather } from './Styles';
import { GrNext, GrPrevious } from 'react-icons/gr'
import WeatherData from '../WeatherData/WeatherData';
import Bookmarks from '../Bookmarks/Bookmarks';
import { format} from 'date-fns'

const ForecastWindow = (props) => {

  const [isLoading, setIsLoading] = useState(false);
  const { download, data } = props;
  const date = data.time;
  const formatedDate = format(new Date(date), 'PPP p');

  if (!data) {
    return null;
  }
  return (
    <ForecastContainer>
      <Bookmarks />
      <ForecastCard>
        <InputCity download={download} />
        {data.temp ?
          <>
            <CityName>{data.name}</CityName>
            <h2>{formatedDate}</h2>
            <ForecastGrid>
              <LeftGrid>
                <img className='weather-icon' src={`http://openweathermap.org/img/w/${data.icon}.png`}
                  alt="weather img" />
                <h2>{data.description}</h2>
              </LeftGrid>
              <RightGrid>
                <WeatherData title='Humidity:' data={data.humidity} />
                <WeatherData title='Temperature:' data={data.temp} />
                <WeatherData title='Pressure:' data={data.pressure} />
                <WeatherData title='Wind:' data={data.wind} />
              </RightGrid>
            </ForecastGrid>
          </> : <BeforeWeather> What's the weather like today?</BeforeWeather>}
      </ForecastCard>
      <ButtonContainer>
        <PreviousButton><GrPrevious size={25} style={{ position: 'absolute', left: '-5%', top: '6px' }} />previous day</PreviousButton>
        <NextButton>next day<GrNext size={25} style={{ position: 'absolute', right: '-6%', top: '6px' }} /></NextButton>
      </ButtonContainer>
    </ForecastContainer>
  )
}

export default ForecastWindow