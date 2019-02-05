import React from 'react';
import './css/main.css';
import Aside from './components/aside';
import Main from './components/main';

const App = () => {
  return (
    <div className="App">
      <div className="wrapper">
        <Aside />
        <Main />
      </div>
    </div>
  );
};

export default App;
