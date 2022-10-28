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
    <div style={{ padding: "2rem" }}>
      <ThemeProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingScreen />} />
            <Route path="/about" element={<AboutScreen />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
