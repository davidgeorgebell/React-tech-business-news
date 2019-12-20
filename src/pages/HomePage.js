import React, { useState, useEffect } from 'react';
import { getHeadlines } from '../utils/newsApi';

const HomePage = () => {
  const [headlines, setHeadlines] = useState([]);
  useEffect(() => {
    getHeadlines().then((data) => setHeadlines(data));
  }, []);

  return (
    <div>
      <p>{JSON.stringify(headlines)}</p>
    </div>
  );
};
export default HomePage;
