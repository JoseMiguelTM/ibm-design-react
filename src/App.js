import React from 'react';
import logo from './logo.svg';
import './App.scss';
import HeaderComponent from './header/HeaderComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Carbon!
        </p>
        <HeaderComponent/>
      </header>
    </div>
  );
}

export default App;
