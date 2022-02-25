import React from 'react'
import SingleBookmark from '../SingleBookmark/SingleBookmark'
import { BookmarksContainer } from './Styles'

const Bookmarks = ({ bookmark, setBookmark }) => {
  return (
    <BookmarksContainer>
      <SingleBookmark name="Current weather" onClick={() => setBookmark('current')} active={bookmark === 'current'} />
      <SingleBookmark name='Hourly forecast' onClick={() => setBookmark('hourly')} active={bookmark === 'hourly'} />
      <SingleBookmark name='16-days forecast' onClick={() => setBookmark('16days')} active={bookmark === '16days'} />
      <SingleBookmark name='Weather chart' onClick={() => setBookmark('chart')} active={bookmark === 'chart'} />
    </BookmarksContainer>
  )
}

export default Bookmarks