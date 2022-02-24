import React from 'react'
import SingleBookmark from '../SingleBookmark/SingleBookmark'
import { BookmarksContainer } from './Styles'
const Bookmarks = () => {

  return (
    <BookmarksContainer>
      <SingleBookmark name='Hourly forecast' />
      <SingleBookmark name='Daily forecast' />
      <SingleBookmark name='16-days forecast' />
      <SingleBookmark name='Weather chart' />
    </BookmarksContainer>
  )
}

export default Bookmarks