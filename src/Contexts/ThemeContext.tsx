import React, { createContext, useState } from "react";

const ThemeContext = createContext({
  theme: "",
});

ThemeContext.displayName = "ThemeContext";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("");

  const themeState = { theme, setTheme };
  return (
    <ThemeContext.Provider value={themeState}>{children}</ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
