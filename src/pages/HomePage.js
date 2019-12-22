import React, { useState, useEffect } from 'react';

import { getHeadlines } from '../utils/newsApi';
import Story from '../components/Story';

import '../styles/title.css';

const HomePage = () => {
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    getHeadlines().then((data) => setHeadlines(data));
  }, []);

  return headlines.length ? (
    <div>
      <h1 className='title'>Business News UK</h1>

      <ul>
        {headlines.map((headline) => (
          <Story headline={headline} key={headline.url} />
        ))}
      </ul>
    </div>
  ) : (
    <div>
      <h3 style={{ marginLeft: '2rem' }}>Loading...</h3>
    </div>
  );
};
export default HomePage;
