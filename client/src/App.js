import "./App.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import ApplicationForm from "./pages/ApplicationForm";
import Signup from "./pages/Signup";
import ContactUs from "./pages/ContactUs";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00070b",
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
          <Route
            path="/signup"
            element={
              <Signup/>
            }
            />
          <Route
            path="/login"
            element={
              <Login/>
            }
            />
            <Route
            path="/application"
            element={
              <ApplicationForm/>
            }
            />
            <Route
            path="/contact"
            element={
              <ContactUs/>
            }
            />
            </Routes>
      </div>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
