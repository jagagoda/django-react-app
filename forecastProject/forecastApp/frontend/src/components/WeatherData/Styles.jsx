import styled from 'styled-components';

export const GridItem = styled.div`
position: relative;
font-size: 22px;
border-radius: 22px;
margin: 10px;
padding: 15px;
background: linear-gradient(45deg, black, transparent);
min-width: 200px;
display: flex;
justify-content: center;
flex-direction: row;
`;

export const GridData = styled.div`
font-size: 28px;
border-radius: 22px;
margin: 10px;
padding: 10px;
text-align: right;
color: white;
font-weight: bold;
`;

export const ItemContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
`;

export const Icon = styled.div`
position: absolute;
left: 0;
top: 10px;
`;