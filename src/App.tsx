import React, { useState } from 'react';
import './App.css';
import { GreetBoxDisplay } from './components';
import { GreetBox } from './models';

function App() {
  // Create a 3x3 grid of GreetBoxes
  const [greetBoxes] = useState(() => {
    const boxes: GreetBox[] = [];
    for (let i = 0; i < 9; i++) {
      const box = new GreetBox();
      box.setCurrentState("hello");
      boxes.push(box);
    }
    return boxes;
  });
  
  const [, setForceUpdate] = useState(0);

  const handleBoxClick = (index: number) => {
    greetBoxes[index].generateNext();
    greetBoxes[index].updateCurrent();
    setForceUpdate(prev => prev + 1); // Force re-render
  };

  return (
    <div className="app">
      <div className="container">
        <h1>GreetBox Grid</h1>
        <div className="greet-box-grid">
          {greetBoxes.map((greetBox, index) => (
            <GreetBoxDisplay 
              key={index}
              greetBox={greetBox} 
              onClick={() => handleBoxClick(index)} 
            />
          ))}
        </div>
        <p>Click any box to toggle between "hello" and "goodbye"</p>
      </div>
    </div>
  );
}

export default App;
