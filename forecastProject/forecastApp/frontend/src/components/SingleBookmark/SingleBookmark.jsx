import React from 'react'
import { Styles } from './Styles'

const SingleBookmark = (props) => {
  const {name} = props;
  return (
    <Styles>{name}</Styles>
  )
}

export default SingleBookmark