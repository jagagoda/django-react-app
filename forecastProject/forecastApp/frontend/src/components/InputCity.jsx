import React, { useState } from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'
import { AiOutlineSearch } from 'react-icons/ai';
const InputCity = (props) => {
  const {download} = props;
  const [weather, setWeather] = useState('');
  const changeWeather = (e) => {
    setWeather(e.target.value)
  }
  return (
    <InputGroup
      className="mb-3"
    >
      <FormControl
        value={weather}
        onChange={changeWeather}
        placeholder="name of the city"
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
      />
      <Button onClick={() => download(weather)} variant="outline-secondary" id="button-addon2">
        <AiOutlineSearch />
      </Button>
    </InputGroup>
  )
}

export default InputCity