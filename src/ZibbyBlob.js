import React from 'react';
import './App.css';

const moodStyles = {
  calm: {
    fill: 'url(#calmGradient)',
    glow: 'rgba(0, 255, 225, 0.4)',
  },
};

function ZibbyBlob({ mood = 'calm' }) {
  const style = moodStyles[mood] || moodStyles['calm'];

  return (
    <div
      className="blob-container"
      style={{
        filter: `drop-shadow(0 0 30px ${style.glow})`,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
      }}
    >
      <svg
        viewBox="0 0 200 200"
        preserveAspectRatio="xMidYMid meet"
        className="zibby-svg-blob"
        style={{ opacity: 0.85, width: '100%', height: '100%' }}
      >
        <defs>
          <radialGradient id="calmGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00ffe1" />
            <stop offset="100%" stopColor="#7b61ff" />
          </radialGradient>
        </defs>
        <path fill={style.fill}>
          <animate
            attributeName="d"
            dur="7s"
            repeatCount="indefinite"
            values="
              M51.4,-68.1C66.1,-56.4,77.1,-38.6,77.9,-21.3C78.6,-4.1,69.2,12.5,58.6,27.8C48,43.2,36.3,57.4,21.8,65.5C7.2,73.7,-10.2,75.9,-27.4,70.7C-44.6,65.6,-61.7,53.2,-67.2,37.4C-72.8,21.7,-66.8,2.7,-60.5,-13.2C-54.2,-29.1,-47.6,-42,-36.4,-53.8C-25.1,-65.6,-9.5,-76.2,7.9,-82.2C25.4,-88.2,50.7,-89.7,51.4,-68.1Z;
              M61.9,-72.4C75.7,-59.3,78.4,-34.1,74.9,-13.5C71.4,7.2,61.6,22.3,50.7,39.2C39.9,56.1,27.9,74.8,12.3,77.8C-3.2,80.8,-22.3,68.1,-38.5,55.5C-54.7,42.9,-67.9,30.4,-72.3,14.2C-76.7,-2,-72.2,-22.1,-62.2,-37.5C-52.2,-52.8,-36.6,-63.4,-20.2,-72.2C-3.8,-81,13.3,-88.1,30.1,-85.6C46.9,-83.1,63.1,-70.9,61.9,-72.4Z;
              M51.4,-68.1C66.1,-56.4,77.1,-38.6,77.9,-21.3C78.6,-4.1,69.2,12.5,58.6,27.8C48,43.2,36.3,57.4,21.8,65.5C7.2,73.7,-10.2,75.9,-27.4,70.7C-44.6,65.6,-61.7,53.2,-67.2,37.4C-72.8,21.7,-66.8,2.7,-60.5,-13.2C-54.2,-29.1,-47.6,-42,-36.4,-53.8C-25.1,-65.6,-9.5,-76.2,7.9,-82.2C25.4,-88.2,50.7,-89.7,51.4,-68.1Z;
            "
          />
        </path>
      </svg>
    </div>
  );
}

export default ZibbyBlob;