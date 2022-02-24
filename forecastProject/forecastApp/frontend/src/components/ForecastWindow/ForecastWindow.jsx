import React, { useState } from 'react'
import InputCity from '../InputCity/InputCity'
import { ForecastContainer, ForecastCard, ForecastGrid, LeftGrid, RightGrid, CityName, NextButton, PreviousButton, ButtonContainer } from './Styles';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { WiHumidity, WiBarometer, WiStrongWind, WiThermometer } from 'react-icons/wi';
import WeatherData from '../WeatherData/WeatherData';
import Bookmarks from '../Bookmarks/Bookmarks';
import { format } from 'date-fns'
import MainContainer from '../MainContainer.jsx/MainContainer';


const ForecastWindow = (props) => {
  const { download, data } = props;
  const date = data.time;
  const [bookmark, setBookmark] = useState('current')

  if (!data) {
    return null;
  }
  return (
    <ForecastContainer>
      <Bookmarks bookmark={bookmark} setBookmark={setBookmark} />
      { bookmark === 'current' &&
      <ForecastCard>
        <InputCity download={download} />
        {data.temperature ?
          <>
            <CityName><span>Weather today in </span>{data.name}{
              data.country? <span>, ({data.country})</span> : null}</CityName>
            <h2>{format(new Date(date * 1000), 'PPPp')}</h2>
            <ForecastGrid>
              <LeftGrid>
                <img className='weather-icon' src={`http://openweathermap.org/img/w/${data.icon}.png`}
                  alt="weather img" />
                <h2>{data.description}</h2>
              </LeftGrid>
              <RightGrid>
                <WeatherData icon={<WiHumidity size={40}/>} title='Humidity:' data={data.humidity + ' %'}/>
                <WeatherData icon={<WiThermometer size={40}/>} title='Temperature:' data={data.temperature} />
                <WeatherData icon={<WiBarometer size={45}/>}title='Pressure:' data={data.pressure} />
                <WeatherData icon={<WiStrongWind size={40} />} title='Wind:' data={data.wind} />
              </RightGrid>
            </ForecastGrid>
          </> : <MainContainer dataEl='' text="What' s the weather like today?" />}
      </ForecastCard>
            }
      <ButtonContainer>
        <PreviousButton><GrPrevious size={25} style={{ position: 'absolute', left: '-5%', top: '6px' }} />previous day</PreviousButton>
        <NextButton>next day<GrNext size={25} style={{ position: 'absolute', right: '-6%', top: '6px' }} /></NextButton>
      </ButtonContainer>
    </ForecastContainer>
  )
}

export default ForecastWindow