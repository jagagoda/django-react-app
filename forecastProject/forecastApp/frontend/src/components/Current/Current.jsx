import React from 'react'
import InputCity from '../InputCity/InputCity'
import { ForecastGrid, LeftGrid, RightGrid, CityName } from './Styles';
import { WiHumidity, WiBarometer, WiStrongWind, WiThermometer } from 'react-icons/wi';
import WeatherData from '../WeatherData/WeatherData';
import { format } from 'date-fns'
import WelcomeScreen from '../WelcomeScreen.jsx/WelcomeScreen';

const Current = (props) => {
  const { download, data } = props;
  const date = data.time;
  return (
    <>
      <InputCity download={download} />
      {data.temperature ?
        <>
          <CityName><span>Weather today in </span>{data.name}{
            data.country ? <span>, ({data.country})</span> : null}</CityName>
          <h2>{format(new Date(date * 1000), 'PPPp')}</h2>
          <ForecastGrid>
            <LeftGrid>
              <img className='weather-icon' src={`http://openweathermap.org/img/w/${data.icon}.png`}
                alt="weather img" />
              <h2>{data.description}</h2>
            </LeftGrid>
            <RightGrid>
              <WeatherData icon={<WiHumidity size={40} />} title='Humidity:' data={data.humidity} units=' %' />
              <WeatherData icon={<WiThermometer size={40} />} title='Temperature:' data={data.temperature} units=' °C' />
              <WeatherData icon={<WiBarometer size={45} />} title='Pressure:' data={data.pressure} units=' hPa' />
              <WeatherData icon={<WiStrongWind size={40} />} title='Wind:' data={data.wind} units=' km/h' />
            </RightGrid>
          </ForecastGrid>
        </> : <WelcomeScreen /> }
    </>
  )
}

export default Current