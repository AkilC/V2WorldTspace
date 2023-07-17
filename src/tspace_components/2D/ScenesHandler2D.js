import React, { useState } from 'react';

const ScenesHandler2D = () => {
  // State to manage the active dropdown
  const [activeDropdowns, setActiveDropdowns] = useState([0, 1, 2, 3]); // Open all dropdowns by default

  // Function to handle dropdown click
  const handleDropdownClick = (index) => {
    if (activeDropdowns.includes(index)) {
      setActiveDropdowns(activeDropdowns.filter(i => i !== index));
    } else {
      setActiveDropdowns([...activeDropdowns, index]);
    }
  };

  // Dropdown data
  const dropdowns = ['Watch', 'Listen', 'Talk', 'Shop'];

  return (
    <div style={styles.container}>
      <div style={styles.sidePanel}>
        <div style={styles.topNav}>
          <h1 style={styles.title}>Community Name</h1>
        </div>
        <div style={styles.bottomNav}>
          {dropdowns.map((dropdown, index) => (
            <div key={index} style={styles.dropdown}>
              <div style={styles.dropdownTitle} onClick={() => handleDropdownClick(index)}>
                <span style={{...styles.dropdownArrow, transform: `rotate(${activeDropdowns.includes(index) ? '90deg' : '0deg'})`}}>&#9656;</span>
                <p style={styles.dropdownTitleText}>{dropdown}</p>
              </div>
              {activeDropdowns.includes(index) && <p style={styles.dropdownItem}>Lorem Ipsum</p>}
            </div>
          ))}
        </div>
      </div>
      <div style={styles.mainPanel}>
        <div style={styles.mainContent}>
          <div style={styles.videoPlaceholder} />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: '100vh',
  },
  sidePanel: {
    width: '20%',
    backgroundColor: '#2c2f33',
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: '20px',
  },
  topNav: {
    borderBottom: '1px solid #4a4d52', // Add bottom border line
    marginBottom: '10px',
    paddingBottom: '10px', // Add space below the title
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dropdown: {
    marginTop: '10px', // Space between dropdowns
  },
  dropdownTitle: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',  // Aligns text and arrow in the same line
    gap: '10px',  // Space between text and arrow
  },
  dropdownTitleText: {
    // Styles for dropdown text
  },
  dropdownArrow: {
    transition: 'transform 0.3s ease', // Smooth transform transition
    fontSize: '1.5em',  // Increased size of arrow
  },
  dropdownItem: {
    marginLeft: '20px', // Indent for dropdown items
  },
  mainPanel: {
    width: '80%',
    backgroundColor: '#36393f',
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
  },
  mainContent: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoPlaceholder: {
    backgroundColor: '#7289da',
    width: '60%',
    height: '60%',
  },
};

export default ScenesHandler2D;
