/* eslint-disable import/no-unresolved */
import React from 'react';
import './css/main.scss';
import Aside from '@components/aside';
import Main from '@components/main';

const App = () => (
    <div className="App">
        <div className="wrapper">
            <Aside />
            <Main />
        </div>
    </div>
);

export default App;
