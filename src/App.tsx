import React, { useState } from 'react';
import './App.css';
import { GreetBox } from './models';
import { GreetBoxDisplay } from './components';

function App() {
  const [greetBox] = useState(() => new GreetBox());
  const [, setForceUpdate] = useState(0);

  return (
    <div className="app">
      <div className="container">
        <h1>GreetBox Demo</h1>
        <GreetBoxDisplay greetBox={greetBox} />
      </div>
    </div>
  );
}

export default App;
