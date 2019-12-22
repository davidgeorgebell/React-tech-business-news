import React from 'react';

import { NavLink } from 'react-router-dom';

import '../styles/page-links.css';

const PageLinks = () => {
  return (
    <div className='page-links-container'>
      <div>
        <ul className='page-links'>
          <li className='page-link'>
            <NavLink to='/' exact>
              Business News
            </NavLink>
          </li>
          <li className='page-link'>
            <NavLink to='/tech' exact>
              Tech News
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default PageLinks;
