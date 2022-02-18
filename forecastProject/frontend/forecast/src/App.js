import './App.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    const download = () => {
      fetch('http://127.0.0.1:8000/')
      .then(respo => respo.json()).then((response) => console.log(response));
   }

    download();
  }, [])


  return (
    <div className="App">
     <h1>Hello World!</h1>
    </div>
  );
}

export default App;
