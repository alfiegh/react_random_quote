import React from 'react';
import quotes from '../QuoteDB';
import '../App.css';

function QuoteAndAuthor(props) {
  const { quote, generateRandomQuote } = props;

  return (
    <div className="card-body">
      <div className="card" id="quote-box">
        <p className="card-text" id="text">
          {quote.quote}
        </p>
        <h5 className="card-title" id="author">
          - {quote.author}
        </h5>
        <button
          className="btn-nq"
          onClick={() => {
            generateRandomQuote(quotes);
          }}
          type="submit"
          id="new-quote"
        >
          <i className="fas fa-mouse" alt="">
            New Quote
          </i>
        </button>
        <button
          className="btn-t"
          onClick={() => {
            generateRandomQuote(quotes);
          }}
          type="submit"
        >
          <a
            href="twitter.com/intent/tweet"
            target="_blank"
            id="tweet-quote"
            alt=""
          >
            Tweet
          </a>
        </button>
      </div>
    </div>
  );
}

export default QuoteAndAuthor;
