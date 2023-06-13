import React from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

type Props = {
  children?: React.ReactNode;
};

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = React.useState<Theme>(defaultTheme);

  const defaultProps = React.useMemo(
    () => ({
      theme: theme,
      setTheme: setTheme,
    }),
    [theme],
  );
  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};
