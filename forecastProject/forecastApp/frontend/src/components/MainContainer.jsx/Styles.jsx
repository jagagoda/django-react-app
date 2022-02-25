import styled from "styled-components";
import MapImg from '../../images/weatherMap2.gif'

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;

`;

export const DataElement = styled.div`

width: 350px;
height: 350px;
border-radius: 50%;
background-image: url(${MapImg});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
`;
