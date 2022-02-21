import './App.css';
import { useEffect, useState } from 'react';
import Main from './components/Main';
import styled from 'styled-components';
import background from './images/cloudsBackground.jpg'

const Styles = styled.div`
height: 100vh;
background-image: url(${background});
background-position: center;
background-size: cover;

`
const App = () => {
  const [data, setData] = useState({});

  const download = (city = '') => {
    fetch(`http://127.0.0.1:8000/?city=${city}`)
      .then(respo => respo.json()).then((response) => setData(response));
  }
  useEffect(() => {

    download();
  }, [])
  console.log(data)

  return (
    <Styles className="App">
      <Main data={data} download={download} />
    </Styles>
  );
}

export default App;
