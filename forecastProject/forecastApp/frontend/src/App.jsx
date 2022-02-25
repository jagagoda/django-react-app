import { useEffect, useState } from 'react';
import Home from './components/Home/Home';
import {Styles, BackgroundOverlay } from './AppStyles';

const App = () => {
  const [data, setData] = useState({});

  const download = (city = '') => {
    fetch(`http://127.0.0.1:8000/?city=${city}`)
      .then(respo => respo.json()).then((response) => {

        const data = JSON.parse(response)

        if(data.length===1) {
          const { fields } = data[0];
          setData(fields);
        }
      });
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
