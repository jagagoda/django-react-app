import styled from "styled-components";
import MapImg from '../../images/weatherMap2.gif'

export const Container = styled.div`

`;

export const TextElement = styled.h1`
font-size: 24px;
padding-top: 24px;
padding-bottom: 10px;

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
