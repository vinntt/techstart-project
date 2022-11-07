import "./App.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";

const theme = createTheme({
  palette: {
    primary: {
      main: "#006494",
    },
    secondary: {
      main: "#4f606e",
    },
    error: {
      main: "#ba1b1b",
    },
    warning: {
      main: "#4f606e",
    },
    info: {
      main: "#4f606e",
    },
    success: {
      main: "#4f606e",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar/>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Homepage/>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/signup"
            element={
              <SignUp/>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/login"
            element={
              <Login/>
            }
          />
        </Routes>
      </div>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
