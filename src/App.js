import React, { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

function App() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <div className='App'>
      <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        <Header setDarkMode={setDarkMode} darkMode={darkMode} />
        <main>
          <h1>The News</h1>
          <HomePage />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
