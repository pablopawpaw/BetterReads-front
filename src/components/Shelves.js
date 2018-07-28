import React from 'react'
import Shelf from './Shelf'

const Shelves = props => {
  console.log('shelves loaded');
  return (
    <div>
      <div className='shelf-book-cover-top-left'></div>
      <div className='shelf-top-left book-cover-title'>
        <h1>Shelf Name</h1>
      </div>
      <div className='shelf-book-cover-top-right'></div>
      <div className='shelf-top-right book-cover-title'>
        <h1>Shelf Name</h1>
      </div>
      <div className='shelf-book-cover-bottom-left'></div>
      <div className='shelf-bottom-left book-cover-title'>
        <h1>Shelf Name</h1>
      </div>
      <div className='shelf-book-cover-bottom-right'></div>
      <div className='shelf-bottom-right book-cover-title'>
        <h1>Shelf Name</h1>
      </div>
    </div>
  )
}

export default Shelves;