import React from 'react'
import { Styles } from './Styles'

const SingleBookmark = (props) => {
  const {name, onClick, active} = props;
  return (
    <Styles onClick={onClick} active={active}>{name}</Styles>
  )
}

export default SingleBookmark