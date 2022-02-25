import React, { useState, useRef } from 'react'
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { SearchContainer, SearchInput, IconButton, SearchButton } from './Styles';

const InputCity = (props) => {
  const inputRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const { download } = props;
  const [weather, setWeather] = useState('');

  const searchWeather = (e) => {
    setWeather(e.target.value)
  }
  const toggleSearch = () => {
    setIsActive(!isActive)
    inputRef.current.focus();
  }
  const pressedKey = (e) => {
    if (e.keyCode === 13) {
      download(weather)
    }
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
      <SearchButton onClick={() => download(weather)}>
        {isActive ? (
          <AiOutlineSearch size={18} />
        ) : (
          ''
        )}
      </SearchButton>
      <SearchInput
        ref={inputRef}
        onKeyDown={pressedKey}
        value={weather}
        onChange={searchWeather}
        placeholder="search for a city..."
      />
    </SearchContainer>
  )
}

export default InputCity
