import React from 'react';

import '../styles/story.css';

const Story = ({ headline }) => {
  return (
    <div className='story-container'>
      <li key={headline.url} className='story-item'>
        <p>
          {headline.source.name}
          <span>{headline.publishedAt}</span>
        </p>
        <a
          href={headline.url}
          style={{ textDecoration: `none`, textColor: `inherit` }}>
          {headline.title}
          <p>{headline.description}</p>
        </a>
      </li>
    </div>
  );
};
export default Story;
