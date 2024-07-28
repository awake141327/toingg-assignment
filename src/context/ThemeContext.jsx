import { createContext, useState } from "react";

export const ThemeContext = createContext(false);

export const ThemeProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
    document.body.classList.toggle("dark");
  };

  return (
    <ThemeContext.Provider value={{ toggle, handleToggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
