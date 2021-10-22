import PropTypes from 'prop-types';
import React from 'react';
import '../style/Quote.css';

const QuoteTemplate = ({ quotes }) => {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  return (
    <div className="quoteList container">
      <h4 className="text-center top-head pt-2">
        <strong>Quotes by Famous Mathmaticians</strong>
      </h4>
      <div className="quote-temp text-center p-3" key={random.id}>
        <img
          className="quote-img rounded-pill mx-auto d-block"
          src={random.images}
          alt=""
        />
        <h3 className="quote-body p-2">{random.body}</h3>
        <p>{random.author}</p>
      </div>
    </div>
  );
};

QuoteTemplate.propTypes = {
  quotes: PropTypes.arrayOf(
    PropTypes.shape({
      images: PropTypes.string,
      body: PropTypes.string,
      author: PropTypes.string,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default QuoteTemplate;
