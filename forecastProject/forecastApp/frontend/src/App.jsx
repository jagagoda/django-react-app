import './App.css';
import { useEffect, useState } from 'react';
import Home from './components/Home/Home';
import styled from 'styled-components';
import background from './images/clouds.jpg'

const Styles = styled.div`
position: relative;
font-family: 'Nunito Sans', sans-serif;
height: 100vh;
background-image: url(${background});
background-position: top;
background-size: cover;
background-repeat: no-repeat;
mask-image: linear-gradient(180deg, rgba(0, 0, 0, 1.0) 40%, transparent);
`
const BackgroundOverlay = styled.div`
position: absolute;
height: 100%;
width: 100%;
background-color: blue;
opacity: 0.1;
`;
const App = () => {
  const [data, setData] = useState({});

  const download = (city = '') => {
    fetch(`http://127.0.0.1:8000/?city=${city}`)
      .then(respo => respo.json()).then((response) => setData(response));
  }
  useEffect(() => {
    download();
  }, [])

  return (
    <Styles className="App">
      <BackgroundOverlay />
      <Home data={data} download={download} />
    </Styles>
  );
}

export default App;
