import React from 'react'
import { Container, TextElement, DataElement } from './Styles';

const MainContainer = (props) => {
  const { children } = props;

  return (
    <Container>
    {children}
    </Container>
  )
}

export default MainContainer