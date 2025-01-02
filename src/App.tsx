import { RouterProvider } from 'react-router-dom';
import routes from './routes/router';
import GlobalStyles from './styles/GlobalStyles';
import { Themes } from './styles/Themes';
import { ThemeProvider } from 'styled-components';
import { Header } from './components/Header';
import { useEffect, useState } from 'react';

// Pego meu theme do localstorage para implementar ao tipo do meu useState
const getTheme = (localStorage.getItem('theme') as 'Light' | 'Dark') || 'Dark';

function App() {
    // Estou definindo que meu theme vai receber light dark e os dados do getheme
    const [theme, setTheme] = useState<'Light' | 'Dark'>(getTheme);
    //esculta todas as alterações meu theme e aplica no localstorage sempre que mudar
    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <ThemeProvider theme={Themes[theme]}>
            <GlobalStyles />
            <Header setTheme={setTheme} />
            <RouterProvider router={routes} />
        </ThemeProvider>
    );
}

export default App