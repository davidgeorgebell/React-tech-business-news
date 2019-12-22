import React, { useState, useEffect } from 'react';

import { getTech } from '../utils/newsApi';
import Story from '../components/Story';

import '../styles/title.css';

const TechPage = () => {
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    getTech().then((data) => setHeadlines(data));
  }, []);

  return headlines.length ? (
    <div>
      <h1 className='title'>Tech News UK</h1>

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
export default TechPage;
