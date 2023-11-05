import './Loading.css'; // Import your CSS file for styling
import React, { useState, useEffect } from 'react';

const Loading = ({ percentage, active }) => {
  const spinnerStyle = {
    transform: `rotate(${(percentage / 100) * 360}deg)`,
  };

  return (
    <div className={`loading-container ${active ? 'active' : ''}`}>
      {percentage < 100 ? (
        <div>
        
          <div className="percentage-label">{percentage}%</div>
        </div>
      ) : (
        <div className="completion-message"><h4>Loading complete!</h4></div>
      )}
    </div>
  );
};

export default Loading;
