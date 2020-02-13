import React, { useState, useEffect } from 'react';


const Navbar = (props) => {
  console.log(props);
  const [darkMode, setDarkMode] = useState(false);
  useEffect(()=> {
    localStorage.setItem('dark', JSON.stringify(darkMode))
  }, [darkMode]);

  const toggleMode = e => {
    console.log(e)
    e.preventDefault();
    setDarkMode(!darkMode);
    props.checkMode(darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
