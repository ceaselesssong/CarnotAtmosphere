import React from 'react';
import './App.css';
import { RoomDisplay } from './components';
import { Air, Room } from './models';

function App() {
  // Create sample rooms with different air qualities
  const rooms: Room[] = [
    {
      name: 'Poor Quality Room',
      air: new Air(0, 100)
    },
    {
      name: 'Poor Quality Room',
      air: new Air(0.2, 100)
    },
    {
      name: 'Poor Quality Room',
      air: new Air(0.4, 100)
    },
    {
      name: 'Poor Quality Room',
      air: new Air(0.6, 100)
    },
    {
      name: 'Poor Quality Room',
      air: new Air(0.8, 100)
    },
    {
      name: 'Poor Quality Room',
      air: new Air(1, 100)
    }
  ];

  return (
    <div className="app">
      <div className="rooms-container">
        <h1>CarnotAtmosphere - Room Air Quality</h1>
        <div className="rooms-grid">
          {rooms.map((room, index) => (
            <RoomDisplay key={index} room={room} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
