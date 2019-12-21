import React from 'react';

const Story = ({ headline }) => {
  return (
    <div className='story-container'>
      <li key={headline.url}>
        <p>{headline.source.name}</p>
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
