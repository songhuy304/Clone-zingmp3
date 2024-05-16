import React, { useState, useEffect } from 'react';

function ToggleDark() {
  const [toggleActive, setToggleActive] = useState('light');

  useEffect(() => {
    const storedMode = localStorage.getItem('colorMode');
    if (storedMode) {
      setToggleActive(storedMode);
    }
  }, []);

  const handleToggleActive = () => {
    const newMode = toggleActive === 'light' ? 'dark' : 'light';
    setToggleActive(newMode);
    localStorage.setItem('colorMode', newMode);
  };

  return (
   
  <label for="toggle" className="inline-flex relative items-center cursor-pointer">
    <input type="checkbox" id="toggle" className="sr-only peer" />
    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-slate-300 dark:peer-focus:ring-indigo-300 rounded-full peer dark:bg-slate-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white dark:bg-slate-500 after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-400 peer-checked:bg-indigo-600 after:bg-cover after:bg-center  "></div>
  </label>
 

  );
}

export default ToggleDark;
