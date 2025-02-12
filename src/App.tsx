import { RouterProvider } from 'react-router-dom';
import routes from './routes/router';
import GlobalStyles from './styles/GlobalStyles';
import { Themes } from './styles/Themes';
import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { Header } from './components/Header';
import { LanguageProvider } from './context/LanguageContext';

const getStoredValue = <T extends string>(key: string, defaultValue: T): T => {
    const stored = localStorage.getItem(key);
    return stored === 'Light' || stored === 'Dark' ? (stored as T) : defaultValue;
};

function App() {
    const [theme, setTheme] = useState<'Light' | 'Dark'>(() => getStoredValue('theme', 'Dark'));

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <LanguageProvider>
            <ThemeProvider theme={Themes[theme]}>
                <GlobalStyles />
                <Header setTheme={setTheme} />
                <RouterProvider router={routes} />
            </ThemeProvider>
        </LanguageProvider>
    );
}

export default App;
