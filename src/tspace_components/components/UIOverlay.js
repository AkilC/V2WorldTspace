import React, { useContext, useState } from 'react';
import { UIOverlayContext } from '../contexts/UIOverlayContext';
import { useNavigate } from 'react-router-dom'; // <- useNavigate hook from react-router-dom
import './UIOverlay.css';

const UIOverlay = () => {
    const { isUIOpen, closeUI } = useContext(UIOverlayContext);
    const [activeButton, setActiveButton] = useState(0);
    const navigate = useNavigate(); // <- useNavigate hook from react-router-dom

    if (!isUIOpen) {
      return null;
    }

    const options = ['Watch', 'Listen', 'Talk','Shop'];

    const navigateTo = (path) => {
      closeUI();
      navigate(path); // <- Use navigate instead of history.push
    };

    return (
      <div className="ui-overlay-container">
        <div className="dialogue-container">
          <p>Welcome to the V2 Tribe Hub, where would you like to go?</p>
          <div className="options-container">
            {options.map((option, index) => (
              <div 
                key={option} 
                className={`option-button ${index === activeButton ? 'active' : ''}`} 
                onClick={() => navigateTo(`/${option}`)} // <- Changes to navigate to specific routes
                onMouseEnter={() => setActiveButton(index)}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};
  
export default UIOverlay;
