import React, { useContext } from 'react';
import { UIOverlayContext } from '../contexts/UIOverlayContext';
import './UIOverlay.css';

const UIOverlay = () => {
    const { isUIOpen, closeUI } = useContext(UIOverlayContext);
  
    if (!isUIOpen) {
      return null;
    }
  
    return (
      <div className="ui-overlay-container">
        <div className="dialogue-container">
          <button className="close-button" onClick={closeUI}>X</button>
          <p>Welcome to the V2 Tribe Hub Demo. We are currently building out the full demo which is to come late 2023. For now feel free to explore the space!</p>
          {/* <div className="options-container">
            {options.map((option, index) => (
              <div 
                key={option} 
                className={`option-button ${index === activeButton ? 'active' : ''}`} 
                onClick={closeUI}
                onMouseEnter={() => setActiveButton(index)}
              >
                {option}
              </div>
            ))}
          </div> */}
        </div>
      </div>
    );
};
  
export default UIOverlay;
