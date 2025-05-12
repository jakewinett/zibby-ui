import React from 'react';

function IconButton({ icon, label, notification, badgeCount }) {
  return (
    <div className="icon-button">
      <div className="icon-circle">
        {icon}
        {notification && <span className="notification-dot"></span>}
        {badgeCount && <span className="badge">{badgeCount}</span>}
      </div>
      <p>{label}</p>
    </div>
  );
}

export default IconButton;
