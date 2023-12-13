import React from 'react';
import { Link } from 'react-router-dom';
import "./BookList.css";

const Book = (book) => {
  return (
    <div className='book-item flex flex-column flex-sb'>
      <div className='book-item-img'>
        <img src={book.cover_img} alt = "cover"/>
      </div>
      <div className='book-item-info text-center'>
        <Link to={`/book/${book.id}`} {... book}>
          <div className='book-item-info-item title fw-7 fs-18'>
            <span>{book.title}</span>
          </div>
        </Link>
        <div className='book-item-info-item author fs-15'>
            <span className='capitalize fw-7'>Author: </span>
            <span>{book.author.join(", ")}</span>
        </div>
        <div className='book-item-info-item contributor fs-15'>
          <span className='capitalize fw-7'>Subjects: </span>
          {book.subject.join(', ')}
        </div>
        <div className='book-item-info-item edition-count fs-15'>
            <span className='capitalize fw-7'>Total Editions: </span>
            <span>{book.edition_count}</span>
        </div>
        <div className='book-item-info-item publish-year fs-15'>
            <span className='capitalize fw-7'>Year Published: </span>
            <span>{book.first_publish_year}</span>
        </div>
      </div>
    </div>
  )
}

export default Book