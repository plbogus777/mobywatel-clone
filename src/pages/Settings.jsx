import React, { useEffect, useState } from "react";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("darkMode") === "true";
    setDarkMode(saved);
    document.documentElement.classList.toggle("dark", saved);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
    document.documentElement.classList.toggle("dark", newMode);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Ustawienia</h2>
      <label className="flex items-center space-x-2">
        <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
        <span>Tryb ciemny</span>
      </label>
    </div>
  );
};

export default Settings;
