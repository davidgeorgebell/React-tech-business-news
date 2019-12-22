import React from 'react';

import '../styles/story.css';

const Story = ({ headline }) => {
  return (
    <div className='story-container'>
      <li key={headline.url} className='story-item'>
        <a
          href={headline.url}
          style={{ textDecoration: `none`, textColor: `inherit` }}>
          <h2 className='story-title'>{headline.title}</h2>
          <p>{headline.description}</p>
        </a>
      </li>
    </div>
  );
};
export default Story;
