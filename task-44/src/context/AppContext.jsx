import { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user] = useState({ name: "Бiгун", level: "Senior" });
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  return (
    <AppContext.Provider value={{ user, theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};