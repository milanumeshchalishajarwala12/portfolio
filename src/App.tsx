import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navigation/Navbar";
import AboutScreen from "./Components/Screens/AboutScreen";
import LandingScreen from "./Components/Screens/LandingScreen";
import { ThemeProvider } from "./Contexts/ThemeContext";
// import Navbar from "./Components/Navigation/Navbar";
// import LandingScreen from "./Components/Screens/LandingScreen"
//@ts-ignore
function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingScreen />} />
          <Route path="/about" element={<AboutScreen />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
