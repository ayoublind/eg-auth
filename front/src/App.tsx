
import './App.css';
import createCache, { EmotionCache } from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material';
import { BuildTheme } from 'theme/theme-variable';
import Routes from 'routes';

const cache: EmotionCache = createCache({
  key: 'css',
  prepend: true
});

const theme = BuildTheme({
  activeMode: 'light'
});

function App() {
  return (
    <CacheProvider value={cache}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes />
        </ThemeProvider>
      </StyledEngineProvider>
    </CacheProvider>
  );
}

export default App;
