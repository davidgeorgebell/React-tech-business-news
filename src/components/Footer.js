import React from 'react';

import '../styles/footer.css';

const Footer = ({ darkMode, setDarkMode }) => {
  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <div className='footer-container'>
        <footer>
          <a
            href='https://github.com/davidgeorgebell'
            style={{ color: `white` }}>
            @davidgeorgebell
          </a>
          <span>
            <a
              href='https:newsapi.org'
              target='blank'
              style={{ color: `grey` }}>
              NewsApi.org
            </a>
          </span>
        </footer>
      </div>
    </div>
  );
};
export default Footer;
