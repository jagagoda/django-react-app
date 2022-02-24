import styled from 'styled-components';


export const ForecastContainer = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
height: 100vh;
padding-top: 30px;
min-height: 483px;
`;
export const ForecastCard = styled.div`
padding-top: 15px;
min-height: 525px;
width: 850px;
box-shadow: 10px 10px 10px black;
background: linear-gradient(45deg, black, transparent);
display: flex;
justify-content: start;
align-items: center;
flex-direction: column;
border-radius: 0 0 22px 22px;


`;
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
export const ButtonContainer = styled.div`
display: flex;
justify-content: space-between;
flex-direction: row;
width: 100%;
padding-top: 15px;

`;

export const NextButton = styled.button`
position: relative;
font-family: 'Nunito Sans', sans-serif;
font-size: 18px;
padding: 7px 20px;
background: transparent;
border: 1px solid transparent;
cursor: pointer;
border-radius: 22px;
color: black;

&:hover {
  text-decoration: underline;
 transition: 0.3s ease-in-out;
}

`;
export const PreviousButton = styled.button`
position: relative;
font-family: 'Nunito Sans', sans-serif;
font-size: 18px;
padding: 7px 20px;
background: transparent;
border: 1px solid transparent;
cursor: pointer;
border-radius: 22px;
color: black;

&:hover {
 text-decoration: underline;
 transition: 0.3s ease-in-out;
}
`;
