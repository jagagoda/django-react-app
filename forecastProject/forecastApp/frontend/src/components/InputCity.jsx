import React, { useState } from 'react'
import { FormControl, Button } from 'react-bootstrap'
import { AiOutlineSearch } from 'react-icons/ai';
import styled from 'styled-components';


const Styles = styled.div`
.form-control{
  font-size: inherit;
  padding: 0.5em;
  margin: 0.1em 0.2em;
  outline: none;
  border: none;
  font-size: 23px;
  border-radius: 20px 0 0 20px;
}
.btn {
  font-size: inherit;
    margin: 0.1em 0.2em;
  border-radius: 0 20px 20px 0;
  outline: none;
  border: none;
  margin-bottom: 5px;
  cursor: pointer;
}
`;
const InputGroup = styled.div`
    font-size: 1em;

`;

const InputCity = (props) => {
  const { download } = props;
  const [weather, setWeather] = useState('');
  const searchWeather = (e) => {
    setWeather(e.target.value)
  }

  return (
    <Styles>
      <InputGroup>
        <FormControl
          value={weather}
          onChange={searchWeather}
          placeholder="name of the city"
          onKeyPress={() => download(weather)}
        />
        <Button
          onClick={() => download(weather)}
          variant="outline-secondary"
          id="button-addon2">
          <AiOutlineSearch style={{padding: '0.5em', fontSize: '1.2em'}}/>
        </Button>
      </InputGroup>
    </Styles>
  )
}

export default InputCity