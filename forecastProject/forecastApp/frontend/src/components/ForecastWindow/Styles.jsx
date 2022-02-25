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
box-shadow: 5px 5px 10px 0 rgba(12, 14, 50, 0.8);
background: linear-gradient(45deg, black, transparent);
display: flex;
justify-content: start;
align-items: center;
flex-direction: column;
border-radius: 0 0 22px 22px;
`;
