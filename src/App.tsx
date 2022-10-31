import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navigation/Navbar";
import AboutScreen from "./Components/Screens/AboutScreen";
import LandingScreen from "./Components/Screens/LandingScreen";
import { ThemeProvider } from "./Contexts/ThemeContext";
import { UserProvider } from "./Contexts/UserContext";
import { FirebaseProvider, FirebaseContext } from "./Contexts/FirebaseContext";
import { firebaseConfig } from "./Utils/firebaseUtils";
import { useContext, useEffect } from "react";
import { getStorage } from "firebase/storage";

//@ts-ignore
function App() {
  return (
    <div>
      <FirebaseProvider>
        <UserProvider>
          <ThemeProvider>
            <Router>
              <Routes>
                <Route path="/" element={<LandingScreen />} />
                <Route path="/about" element={<AboutScreen />} />
              </Routes>
            </Router>
          </ThemeProvider>
        </UserProvider>
      </FirebaseProvider>
    </div>
  );
}

export default App;
