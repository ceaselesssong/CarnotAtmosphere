import React, { useState, useEffect } from 'react';
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

  // Toggle all boxes every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // Toggle all greet boxes
      greetBoxes.forEach(greetBox => {
        greetBox.generateNext();
        greetBox.updateCurrent();
      });
      setForceUpdate(prev => prev + 1); // Force re-render
    }, 3000); // 3000 milliseconds = 3 seconds

    // Cleanup function to clear the interval when component unmounts
    return () => clearInterval(interval);
  }, [greetBoxes]); // Dependency array includes greetBoxes

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
        <p>All boxes toggle automatically every 3 seconds</p>
        <p>Click any box to toggle it individually</p>
      </div>
    </div>
  );
}

export default App;
