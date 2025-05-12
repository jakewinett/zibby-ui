// App.js
import React from 'react';
import './App.css';
import ZibbyBlob from './ZibbyBlob';
import IconButton from './IconButton';
import { FaUser, FaComments, FaBook, FaUsers, FaRegCalendarAlt } from 'react-icons/fa';

function App() {
  const icons = [
    { label: "Me", icon: <FaUser />, notification: true },
    { label: "ZibLine", icon: <FaComments /> },
    { label: "Memories", icon: <FaBook />, badgeCount: 3 },
    { label: "Family & Friends", icon: <FaUsers />, badgeCount: 2 },
    { label: "Journal", icon: <FaRegCalendarAlt /> },
  ];

  const ORBIT_RADIUS = 160; // Set orbit radius to 160px

  return (
    <div className="app-container">
      <h1>Zibby</h1>
      <div className="centerpiece">
        <div className="icon-orbit-array">
          {icons.map((props, i) => (
            <div
              className="icon-orbit"
              key={props.label}
              style={{
                transform: `
                  rotate(${(360 / icons.length) * i}deg)
                  translate(0, -160px)
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