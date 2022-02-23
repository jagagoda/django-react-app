import React from 'react'
import SingleBookmark from '../SingleBookmark/SingleBookmark'
import { BookmarksContainer } from './Styles'
const Bookmarks = () => {

  return (
    <BookmarksContainer>
      <SingleBookmark name='chart'/>
      <SingleBookmark name='magic'/>
      <SingleBookmark name='16-days weather'/>
      <SingleBookmark name= 'pie recipe'/>
      <SingleBookmark name='funny dogs'/>
    </BookmarksContainer>
  )
}

export default Bookmarks