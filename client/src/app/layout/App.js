import React,{ useState } from 'react'
import Catalog from '../../features/catalog/Catalog';
import './styles.css';
import Header from "../layout/Header"
import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? "dark" : "light";
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === "light" ? "#eaeaea" : "#121212",
      }
    }
  });
  const handleChange = (event) => {
    setDarkMode(event.target.checked);
  };
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} handleChange={handleChange} />
      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>
  );
}

export default App;
