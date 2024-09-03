import { useState } from 'react';
import './TransitionLine.css'; 

const TransitionLine = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`line ${hovered ? 'line-hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    ></div>
  );
};

export default TransitionLine;
