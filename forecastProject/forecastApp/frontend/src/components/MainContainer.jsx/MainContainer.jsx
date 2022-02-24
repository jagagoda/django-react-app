import React from 'react'
import { Container, TextElement, DataElement } from './Styles';

const MainContainer = (props) => {
  const { text, dataEl } = props;

  return (
    <Container>
    <TextElement>{text}</TextElement>
    <DataElement>{dataEl}</DataElement>
    </Container>
  )
}

export default MainContainer