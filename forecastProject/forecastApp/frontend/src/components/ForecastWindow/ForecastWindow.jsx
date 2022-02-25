import React, { useState } from 'react'
import { ForecastContainer, ForecastCard } from './Styles';
import Bookmarks from '../Bookmarks/Bookmarks';
import Current from '../Current/Current';
import Hourly from '../Hourly/Hourly';
import LongTermWeather from '../LongtermWeather/LongtermWeather';
import Chart from '../Chart/Chart';

const ForecastWindow = (props) => {
  const { download, data } = props;
  const [bookmark, setBookmark] = useState('current')

  if (!data) {
    return null;
  }
  return (
    <ForecastContainer>
      <Bookmarks bookmark={bookmark} setBookmark={setBookmark} />
      <ForecastCard>
        {bookmark === 'current' &&
          <Current download={download} data={data} />
        }
        {bookmark === 'hourly' &&
          <Hourly />
        }
        {bookmark === '16days' &&
          <LongTermWeather />
        }
        {bookmark === 'chart' &&
          <Chart />
        }
      </ForecastCard>
    </ForecastContainer>
  )
}

export default ForecastWindow