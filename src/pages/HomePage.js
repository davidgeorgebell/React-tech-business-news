import React, { useState, useEffect } from 'react';

import { getHeadlines } from '../utils/newsApi';
import Story from '../components/Story';

const HomePage = () => {
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    getHeadlines().then((data) => setHeadlines(data));
  }, []);

  return headlines.length ? (
    <div>
      <ul>
        {headlines.map((headline) => (
          <Story headline={headline} key={headline.url} />
        ))}
      </ul>
    </div>
  ) : (
    <div>
      <h3>Loading...</h3>
    </div>
  );
};
export default HomePage;
