import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import Content from "./components/Content";
import Header from "./components/Header";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#FFF",
        dark: "#FFF",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Content />
    </ThemeProvider>
  );
}

export default App;
