import React,{ useState } from 'react'
import Catalog from '../../features/catalog/Catalog';
import './styles.css';
import Header from "../layout/Header"
import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import ProductDetail from "../../features/catalog/ProductDetail"
import ContactPage from '../../features/contact/ContactPage';
import AboutPage from "../../features/about/AboutPage"

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
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path='/catalog' element={<Catalog/>} />
          <Route path='/catalog/:id' element={<ProductDetail/>} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/contact' element={<ContactPage/>} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
