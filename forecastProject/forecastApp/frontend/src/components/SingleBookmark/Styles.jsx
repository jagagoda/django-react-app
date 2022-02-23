import styled from "styled-components";

export const Styles = styled.button`
z-index: 10;
height: 33px;
border: 1px solid #545776;
border-bottom: none;
border-radius: 22px 22px 0 0;
background: transparent;
color: white;
cursor: pointer;

&:hover {
  background: #26253e;
  box-shadow: 0.4em 0.4em 1em #21203e;
  color: white;
  transition: 0.3s ease-in-out;
}
`;
