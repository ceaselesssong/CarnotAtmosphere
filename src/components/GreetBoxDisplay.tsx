import React from 'react';
import { GreetBox } from '../models';

interface GreetBoxDisplayProps {
  greetBox: GreetBox;
}

/**
 * Displays a GreetBox as a 100x100 pixel square with text from its currentState.
 */
export const GreetBoxDisplay: React.FC<GreetBoxDisplayProps> = ({ greetBox }) => {
  const boxStyle: React.CSSProperties = {
    width: '100px',
    height: '100px',
    backgroundColor: '#f0f0f0',
    border: '1px solid #333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: '12px',
    padding: '5px',
    boxSizing: 'border-box',
    wordWrap: 'break-word',
  };

  return (
    <div style={boxStyle}>
      {greetBox.getCurrentState()}
    </div>
  );
};
