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
import ApplicationForm from "./pages/ApplicationForm";

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
          <Route
            path="/signup"
            element={
              <SignUp/>
            }
            />
          <Route
            path="/login"
            element={
              <Login/>
            }
            />
            <Route
            path="/application-form"
            element={
              <ApplicationForm/>
            }
            />
            </Routes>
      </div>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
