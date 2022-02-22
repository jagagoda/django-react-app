import React, { useState } from 'react'
import InputCity from './InputCity'
import styled from 'styled-components';


const ForecastContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 100vh;
`;
const ForecastCard = styled.div`
padding: 15px;
height: 500px;
width: 850px;
box-shadow: 10px 10px 10px black;
background: linear-gradient(45deg, black, transparent);
display: flex;
justify-content: start;
align-items: center;
flex-direction: column;
border-radius: 20px;
padding-top: 30px;
`;
const ForecastGrid = styled.div`
display: grid;
padding-top: 6em;
grid-template-columns: repeat(2, 1fr);
grid-gap: 6em;
`;

const LeftGrid = styled.div`
color: white;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
text-align: left;
.weather-icon {
height: 100px;
width: 100px;
}
`;

const RightGrid = styled.div`
font-size: 0.8em;
color: white;
display: flex;
justify-content: flex-end;
flex-direction: column;
text-align: left;
span {
  font-size: 22px;
  color: white;
  padding-left: 20px;
}
`;

const Item = styled.div`
font-size: 22px;
border-radius: 22px;
margin: 10px;
padding: 10px;
text-align: center;
background: linear-gradient(45deg, black, transparent);
min-width: 170px;
`;

const Item2 = styled.div`
font-size: 28px;
border-radius: 22px;
margin: 10px;
padding: 10px;
text-align: right;
color: white;
`;
const ItemContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
`;
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
        <ForecastGrid>
          {data ?
            <>
              <LeftGrid>
                <img className='weather-icon' src={`http://openweathermap.org/img/w/${data.icon}.png`}
                  alt="weather img" />
                <h1>{data.description}</h1>
              </LeftGrid>
              <RightGrid>
                <ItemContainer>
                  <Item>Humidity: </Item>
                  <Item2>{data.humidity}</Item2>
                </ItemContainer>
                <ItemContainer>
                  <Item>Temperature:</Item>
                  <Item2>{data.temp}</Item2>
                </ItemContainer>
                <ItemContainer>
                  <Item>Pressure:</Item>
                  <Item2>{data.pressure}</Item2>
                </ItemContainer>
                <ItemContainer>
                  <Item>Rain:</Item>
                  <Item2>{data.name}</Item2>
                </ItemContainer>
              </RightGrid>
            </> : <>
              <h1> What's the weather like today?</h1>
            </>}
        </ForecastGrid>
      </ForecastCard>
    </ForecastContainer>
  )
}

export default ForecastWindow