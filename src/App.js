// App.js
import React from 'react';
import './App.css';
import IconButton from './IconButton';
import { FaUser, FaComments, FaBook, FaUsers, FaRegCalendarAlt, FaBookOpen, FaStream, FaImages } from 'react-icons/fa';
import ZibbyBlob from './ZibbyBlob';

function App() {
  const icons = [
    { label: "Me", icon: <FaUser />, notification: true },
    { label: "ZibLine", icon: <FaStream /> },
    { label: "Memories", icon: <FaImages />, badgeCount: 3 },
    { label: "Family & Friends", icon: <FaUsers />, badgeCount: 2 },
    { label: "Journal", icon: <FaBookOpen /> },
  ];

  const ORBIT_RADIUS = 269; // Increased orbit radius by another 20% (224px * 1.2 ≈ 269px)

  return (
    <div className="app-container">
      <h1>Zibby</h1>
      <div className="centerpiece">
        <div className="blob-center">
          <ZibbyBlob />
        </div>
        <div className="icon-orbit-array">
          {icons.map((props, i) => (
            <div
              className="icon-orbit"
              key={props.label}
              style={{
                transform: `
                  rotate(${(360 / icons.length) * i}deg)
                  translate(0, -269px)
                  rotate(-${(360 / icons.length) * i}deg)
                `
              }}
            >
              <IconButton {...props} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;