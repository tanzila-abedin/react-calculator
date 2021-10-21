import PropTypes from 'prop-types';

const QuoteTemplate = ({ quotes }) => {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  return (
    <div className="quoteList">
      <div className="quote-temp" key={random.id}>
        <div className="quote-img">{random.images}</div>
        <h2>{random.body}</h2>
        <p>{random.author}</p>
      </div>
    </div>
  );
};

QuoteTemplate.propTypes = {
  quotes: PropTypes.arrayOf(PropTypes.element).isRequired,
};
export default QuoteTemplate;
