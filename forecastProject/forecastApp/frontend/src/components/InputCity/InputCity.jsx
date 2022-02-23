import React, { useState } from 'react'
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { SearchContainer, SearchInput, IconButton, SearchButton } from './Styles';

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
