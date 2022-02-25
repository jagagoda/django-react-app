import React from 'react'
import { Container } from './Styles';

const MainContainer = (props) => {
  const { children } = props;

  return (
    <Container>
    {children}
    </Container>
  )
}

export default MainContainer