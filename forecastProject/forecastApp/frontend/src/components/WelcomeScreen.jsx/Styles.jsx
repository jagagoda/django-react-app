import styled from "styled-components";
import weatherMap from '../../images/weatherMap2.gif'

export const WelcomeContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
height: 100%;
`;

export const WelcomeText = styled.div`
font-size: 25px;
padding-bottom: 20px;
`;

export const ImageContainer = styled.div`
background-image: url(${weatherMap});
background-repeat: no-repeat;
background-size: contain;
width: 300px;
height: 300px;
border-radius: 50%;
`;
