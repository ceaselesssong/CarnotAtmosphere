import React, { useState } from 'react';
import './App.css';
import { GreetBoxDisplay } from './components';
import { GreetBox } from './models';

function App() {
  const [greetBox] = useState(() => {
    const box = new GreetBox();
    // Set initial state to "hello" to start the toggle
    box.setCurrentState("hello");
    return box;
  });
  const [, setForceUpdate] = useState(0);

  const handleBoxClick = () => {
    greetBox.generateNext();
    greetBox.updateCurrent();
    setForceUpdate(prev => prev + 1); // Force re-render
  };

  return (
    <div className="app">
      <div className="container">
        <h1>GreetBox Demo</h1>
        <GreetBoxDisplay greetBox={greetBox} onClick={handleBoxClick} />
        <p>Click the box to toggle between "hello" and "goodbye"</p>
      </div>
    </div>
  );
}

export default App;
