import React from 'react';

import Random from './components/Gif/Random';
import Tag from './components/Gif/Tag';

import './App.css';

const App = () => (
    <div>
        <h1>Random GIF Application</h1>
        <div className="main-container">
            <Random />
            <Tag />
        </div>
    </div>
);

export default App;