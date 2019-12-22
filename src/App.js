import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ThemeContext } from './contexts/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import TechPage from './pages/TechPage';
import PageLinks from './components/PageLinks';

function App() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <Router>
      <div className='App'>
        <div className={darkMode ? 'dark-mode' : 'light-mode'}>
          <Header setDarkMode={setDarkMode} darkMode={darkMode} />
          <PageLinks />
          <main>
            <Switch>
              <Route path='/' exact component={HomePage} />
              <Route path='/tech' exact component={TechPage} />
            </Switch>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
