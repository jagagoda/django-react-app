import React, { useState } from 'react'
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import styled from 'styled-components';

const SearchContainer = styled.div`
position: relative;
width: ${props => props.isSearching ? 360 : 48}px;
height: 48px;
background: darkgrey;
box-shadow: 10px 10px 10px black;
border-radius: ${props => props.isSearching ? '22px' : '50%'};
display: flex;
justify-content: space-between;
padding-left: 9.5px;
transition: all 0.3s ease;
`;

const SearchInput = styled.input`
padding-left: 48px;
border: none;
position: absolute;
top: 0;
left: 0;
height: 100%;
width: 100%;
background-color: transparent;
outline: none;
font-size: 18px;
border: 1px solid transparent;
text-align: left;

&:focus{
  border-color: rgba(0, 0, 0, 0.3);
  border-radius: 22px;
}
`;

const IconButton = styled.button`
position: relative;
height: 46px;
width: 46px;
border: none;
z-index: 1;
cursor: pointer;
background: none;

&:hover {
  color: white;
  &::after {
    opacity: 1;
    transform: scale(1);
  }
}
&::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  border-radius: 50%;
  z-index: -1;
  background: #000;
  transition: 0.2 ease;
  transform: scale(0.6);
  opacity: 0;
}
`;
const SearchButton = styled.button`
position: relative;
height: 46px;
width: 46px;
border: none;
z-index: 1;
cursor: pointer;
background: none;
outline: none;

&:hover {
  color: white;
  &::after {
    opacity: 1;
    transform: scale(1);
  }
}
&::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  border-radius: 50%;
  z-index: -1;
  background: #000;
  transition: 0.2 ease;
  transform: scale(0.6);
  opacity: 0;
}
`;

const InputCity = (props) => {
  const [isActive, setIsActive] = useState(false);
    const { download } = props;
  const [weather, setWeather] = useState('');

  const searchWeather = (e) => {
    setWeather(e.target.value)
  }
  const toggleSearch = () => {
    setIsActive(!isActive)
  }

  return (
    <SearchContainer isSearching={isActive}>
      <IconButton
      isSearching={isActive}
      onClick={toggleSearch}>
      {isActive ? (
        <AiOutlineClose size={16} />
        ) : (
          <AiOutlineSearch size={28} />
        )}
      </IconButton>
      <SearchButton>
      {isActive ? (
          <AiOutlineSearch size={18} />
      ) : (
        ''
      )}
        </SearchButton>
      <SearchInput
        value={weather}
        onChange={searchWeather}
        placeholder="search for a city..."
        onKeyPress={() => download(weather)}/>

    </SearchContainer>
  )
}

export default InputCity
