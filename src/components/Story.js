import React from 'react';

import '../styles/story.css';

const Story = ({ headline }) => {
  return (
    <div className='story-container'>
      <li key={headline.url} className='story-item'>
        <p className='story-source'>{headline.source.name}</p>
        <a
          href={headline.url}
          target='blank'
          style={{ textDecoration: `none`, textColor: `inherit` }}>
          <h2 className='story-title'>{headline.title}</h2>
          <p>{headline.description}</p>
        </a>
      </li>
    </div>
  );
};
export default Story;
