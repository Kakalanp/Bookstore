/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import Form from './Form';
import { fetchBooks } from '../redux/books/books';

export default function Books() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  useEffect(() => { dispatch(fetchBooks()); }, []);
  return (
    <section>

      {/* <div className="content">
        {books.map((book) => (
          <Book
            key={book.id}
            title={book.title}
            author={book.author}
            id={book.id}
            category={book.category}
          />
        ))}
      </div> */}

      <div className="testbook" id="testbook" style={{ '--text-color': '#FFD700' }}>
        <svg width="30" height="30" viewBox="0 0 30 30" className="circular-progress" style={{ '--completion': 69 }}>
          <circle className="bg" />
          <circle className="fg" />
        </svg>
        <div className="book_info">
          <p className="title">Newton philosophiae naturalis principia mathematica</p>
          <p className="author">Theophrastus Phillippus Aureolus Bombastus von Hohenheim</p>
        </div>
      </div>
      <Form />
    </section>
  );
}
