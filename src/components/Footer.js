import React from 'react';

import '../styles/footer.css';

const Footer = ({ darkMode, setDarkMode }) => {
  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <div className='footer-container'>
        <footer>
          <a className='github' href='https://github.com/davidgeorgebell'>
            @davidgeorgebell
          </a>
          <a href='https:newsapi.org' target='blank' style={{ color: `grey` }}>
            NewsApi.org
          </a>
        </footer>
      </div>
    </div>
  );
};
export default Footer;
