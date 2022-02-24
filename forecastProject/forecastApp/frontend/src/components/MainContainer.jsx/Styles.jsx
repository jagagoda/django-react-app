import styled from "styled-components";
import MapImg from '../../images/weatherMap2.gif'

export const Container = styled.div`

`;

export const TextElement = styled.h1`
font-size: 24px;
padding-top: 24px;
padding-bottom: 20px;

`;

export const DataElement = styled.div`

width: 400px;
height: 300px;
background-image: url(${MapImg});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
`;
