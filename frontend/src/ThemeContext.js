import React from 'react';

export const ThemeContext = React.createContext();

export const ThemeContextProvider = ({ children }) => {
  const themes = {
    light: {
      background: '#ffffff',
      header: '#ffffff',
    },
    dark: {
      background: '#696969',
      header: '#4F4F4F',
    },
  };

  const [theme, setTheme] = React.useState(themes.light);

  const toggleTheme = () => {
    setTheme(
      theme.background === themes.dark.background ? themes.light : themes.dark
    );
    console.log(theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
