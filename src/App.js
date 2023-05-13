import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import AuthRoutes from "./Routes/AuthRoutes";

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: "#8e6ed5",
      },
      secondary: {
        main: "#ff0000",
      },
      info: {
        main: "#0000ff"
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='home' element={<AuthRoutes><Home /></AuthRoutes>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
