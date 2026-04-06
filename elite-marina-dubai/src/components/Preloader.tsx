import React, { useEffect, useState } from 'react';

export const Preloader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide the preloader after 3.5 seconds
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 3500);
    return () => clearTimeout(timeout);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="preloader-overlay">
      <div className="loader">
        <div className="loading-text">
          LOADING<span className="dot">.</span><span className="dot">.</span><span className="dot">.</span>
        </div>
        <div className="loading-bar-background">
          <div className="loading-bar">
            <div className="white-bars-container">
              <div className="white-bar"></div>
              <div className="white-bar"></div>
              <div className="white-bar"></div>
              <div className="white-bar"></div>
              <div className="white-bar"></div>
              <div className="white-bar"></div>
              <div className="white-bar"></div>
              <div className="white-bar"></div>
              <div className="white-bar"></div>
              <div className="white-bar"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
