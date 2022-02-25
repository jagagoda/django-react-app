import styled from "styled-components";

export const Styles = styled.button`
z-index: 10;
height: 33px;
border: 1px solid rgba(12, 14, 50, 0.8);
border-bottom: none;
border-radius: 22px 22px 0 0;
background: transparent;
color: white;
cursor: pointer;

&:hover {
  background: #21203e;
  box-shadow: 5px 5px 10px 0 rgba(12, 14, 50, 0.8);
  box-shadow-bottom: none;
  border-bottom: none;
  transition: 0.3s ease-in-out;
}
  ${props => props.active && `
    background: #21203e;
  `}
`;
