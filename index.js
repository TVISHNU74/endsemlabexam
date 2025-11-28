import React, { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () =>
    setTheme(theme === "light" ? "dark" : "light");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const style = {
    background: theme === "light" ? "#fff" : "#222",
    color: theme === "light" ? "#000" : "#fff",
    height: "100vh",
    padding: "20px"
  };

  return (
    <div style={style}>
      <h2>KL Student Portal</h2>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
};

export default function Main() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
