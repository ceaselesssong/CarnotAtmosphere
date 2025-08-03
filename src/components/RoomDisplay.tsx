import React from 'react';
import { Room } from '../models';

interface RoomDisplayProps {
  room: Room;
}

/**
 * Interpolates between two RGB colors based on a factor (0-1).
 * @param color1 Starting color as [r, g, b]
 * @param color2 Ending color as [r, g, b]
 * @param factor Interpolation factor (0-1)
 * @returns Interpolated color as RGB string
 */
const interpolateColor = (
  color1: [number, number, number],
  color2: [number, number, number],
  factor: number
): string => {
  // Clamp factor between 0 and 1
  const clampedFactor = Math.max(0, Math.min(1, factor));

  const r = Math.round(color1[0] + (color2[0] - color1[0]) * clampedFactor);
  const g = Math.round(color1[1] + (color2[1] - color1[1]) * clampedFactor);
  const b = Math.round(color1[2] + (color2[2] - color1[2]) * clampedFactor);
  
  return `rgb(${r}, ${g}, ${b})`;
};

/**
 * Displays a room as a colored rectangle based on air quality.
 * Color interpolates from brown (quality 0) to light blue (quality 1).
 */
export const RoomDisplay: React.FC<RoomDisplayProps> = ({ room }) => {
  // Brown color for quality 0: rgb(139, 69, 19)
  const brownColor: [number, number, number] = [139, 69, 19];
  
  // Light blue color for quality 1: rgb(173, 216, 230)
  const lightBlueColor: [number, number, number] = [173, 216, 230];
  
  // Get the background color based on air quality
  const backgroundColor = interpolateColor(brownColor, lightBlueColor, room.air.quality);
  
  const roomStyle: React.CSSProperties = {
    width: '400px',
    height: '200px',
    backgroundColor: backgroundColor,
    border: '2px solid #333',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#333',
    fontWeight: 'bold',
    fontSize: '14px',
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div style={roomStyle}>
      <div>
        {room.name && <div>{room.name}</div>}
        <div>Quality: {room.air.quality.toFixed(2)}</div>
        <div>Amount: {room.air.amount}</div>
      </div>
    </div>
  );
};
