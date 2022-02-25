import styled from 'styled-components';
import background from './images/clouds.jpg'

export const Styles = styled.div`
position: relative;
font-family: 'Nunito Sans', sans-serif;
height: 100vh;
background-image: url(${background});
background-position: top;
background-size: cover;
background-repeat: no-repeat;
mask-image: linear-gradient(180deg, rgba(0, 0, 0, 1.0) 40%, transparent);
`
export const BackgroundOverlay = styled.div`
position: absolute;
height: 100%;
width: 100%;
background-color: blue;
opacity: 0.1;
`;