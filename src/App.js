import React, { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Title from './components/Title';

function App() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <div className='App'>
      <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        <Header setDarkMode={setDarkMode} darkMode={darkMode} />
        <Title />
        <main>
          <HomePage />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
