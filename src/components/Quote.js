import { useState } from 'react';
import mockData from '../data/db';
import QuoteTemplate from './QuoteList';

const Quote = () => {
  const [quotes] = useState(mockData);

  return (
    <div className="quote">
      <QuoteTemplate quotes={quotes} />
    </div>
  );
};

export default Quote;
