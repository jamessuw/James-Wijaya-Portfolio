import React from 'react';
import './Loading.css'; // Import your CSS file for styling

const Loading = ({ active }) => {
  return (
    <div className={`loading-container ${active ? 'active' : ''}`}>
      <div className="spinner"></div>
    </div>
  );
};

export default Loading;