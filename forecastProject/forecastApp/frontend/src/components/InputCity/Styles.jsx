import styled from 'styled-components';

export const SearchContainer = styled.div`
position: relative;
width: ${props => props.isSearching ? 360 : 48}px;
height: 48px;
background: #e6e6fe;
box-shadow: 7px 7px 7px black;
border-radius: ${props => props.isSearching ? '22px' : '50%'};
display: flex;
justify-content: space-between;
padding-left: 9.5px;
transition: all 0.3s ease;
`;

export const SearchInput = styled.input`
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

export const IconButton = styled.button`
position: relative;
height: 46px;
width: 46px;
border: none;
z-index: 1;
cursor: pointer;
background: none;
outline: none;

&:hover {
  color: grey;
}

`;
export const SearchButton = styled.button`
position: relative;
height: 46px;
width: 46px;
border: none;
z-index: 1;
cursor: pointer;
background: none;
outline: none;

&:hover {
  color: grey;

}

`;
