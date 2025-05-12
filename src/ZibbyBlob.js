import React, { useRef, useEffect } from 'react';
import './App.css';

/**
 * ZibbyBlob
 * Props:
 * - mode: 'idle' | 'speaking' | 'listening'
 *   Controls the animation and color mode of the blob.
 */
function ZibbyBlob({ mode = 'idle' }) {
  const blobRef = useRef(null);

  useEffect(() => {
    if (!blobRef.current) return;
    // Remove all mode classes
    blobRef.current.classList.remove('zibby-blob-speaking', 'zibby-blob-listening', 'zibby-blob-idle');
    // Add current mode class
    blobRef.current.classList.add(`zibby-blob-${mode}`);
  }, [mode]);

  return (
    <div className="zibby-blob-outer">
      <svg
        ref={blobRef}
        className="zibby-blob-svg"
        viewBox="0 0 200 200"
        width="100%"
        height="100%"
      >
        <defs>
          <radialGradient id="zibbyGradient" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#7fffe1" stopOpacity="0.7">
              <animate attributeName="stop-color" values="#7fffe1;#e0b8ff;#a1e6ff;#7fffe1" dur="4s" repeatCount="indefinite" />
              <animate attributeName="stop-opacity" values="0.7;0.5;0.6;0.7" dur="4s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="#a1a6ff" stopOpacity="0.5">
              <animate attributeName="stop-color" values="#a1a6ff;#ffe0fb;#7fffe1;#a1a6ff" dur="4s" repeatCount="indefinite" />
              <animate attributeName="stop-opacity" values="0.5;0.3;0.4;0.5" dur="4s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#e0b8ff" stopOpacity="0.4">
              <animate attributeName="stop-color" values="#e0b8ff;#7fffe1;#ffe0fb;#e0b8ff" dur="4s" repeatCount="indefinite" />
              <animate attributeName="stop-opacity" values="0.4;0.2;0.3;0.4" dur="4s" repeatCount="indefinite" />
            </stop>
          </radialGradient>
        </defs>
        <path fill="url(#zibbyGradient)">
          <animate
            attributeName="d"
            dur={mode === 'speaking' ? '0.7s' : mode === 'listening' ? '1.2s' : '2s'}
            repeatCount="indefinite"
            values="
              M60,40 Q80,10 120,40 Q170,60 140,120 Q120,190 60,160 Q10,120 40,60 Q50,50 60,40 Z;
              M60,40 Q90,20 120,40 Q170,80 140,120 Q120,190 60,160 Q20,120 40,60 Q50,50 60,40 Z;
              M60,40 Q80,10 120,40 Q170,60 140,120 Q120,190 60,160 Q10,120 40,60 Q50,50 60,40 Z
            "
          />
        </path>
      </svg>
    </div>
  );
}

export default ZibbyBlob;

