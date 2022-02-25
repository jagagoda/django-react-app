import styled from 'styled-components';

export const ForecastGrid = styled.div`
display: grid;
padding-top: 2em;
grid-template-columns: repeat(2, 1fr);
grid-gap: 2em;
`;

export const LeftGrid = styled.div`
z-index:10;
color: white;
display: flex;
justify-content: flex-start;
flex-direction: column;
align-items: center;
text-align: left;
.weather-icon {
width: 150px;
}
h2 {
  text-align: center;
  max-width: 290px;
}
`;

export const RightGrid = styled.div`
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

export const GridItem = styled.div`
font-size: 22px;
border-radius: 22px;
margin: 10px;
padding: 10px;
text-align: center;
background: linear-gradient(45deg, black, transparent);
min-width: 170px;
`;

export const GridData = styled.div`
font-size: 28px;
border-radius: 22px;
margin: 10px;
padding: 10px;
text-align: right;
color: white;
font-weight: bold;
`;
export const ItemContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
`;

export const CityName = styled.h1`
text-transform: capitalize;
font-weight: bold;
font-size: 25px;
padding-top: 25px;
span {
  text-transform: none;
  font-weight: normal;
}
`;
