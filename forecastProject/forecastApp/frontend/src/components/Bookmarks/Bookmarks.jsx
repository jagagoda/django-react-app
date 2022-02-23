import React from 'react'
import SingleBookmark from '../SingleBookmark/SingleBookmark'
import { BookmarksContainer } from './Styles'
const Bookmarks = () => {
  return (
    <BookmarksContainer>
    <SingleBookmark />
      <SingleBookmark />
      <SingleBookmark />
      <SingleBookmark />
      <SingleBookmark />
    </BookmarksContainer>
  )
}

export default Bookmarks