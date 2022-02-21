import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    const download = () => {
      fetch('http://127.0.0.1:8000/?city=Warszawa')
      .then(respo => respo.json()).then((response) => setData(response));
   }
    download();
  }, [])


  return (
    <div className="App">
     <h1>{data.humidity}</h1>
      <h1>{data.temp}</h1>
    </div>
  );
}

export default App;
