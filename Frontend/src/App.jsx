import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './components/Home/Home';
import ScorePage from './components/ScorePage/ScorePage';
import Best5Page from './components/Best5Page/Best5Page';
import TemplateSelectionPage from './components/TemplateSelectionPage/TemplateSelectionPage'; 
import Template1 from './components/Template1/Template1'; 
import Template2 from './components/Template2/Template2'; 
import Template3 from './components/Template3/Template3'; 
import Template4 from './components/Template4/Template4'; 
import Template5 from './components/Template5/Template5';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Speedometer from "./components/Speedometer/Speedometer";
import RedirectPage from "./components/Best5Page/Best5Page";
import SignUp from "./components/SignUp/SignUp";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
        <Route path="/score" element={isLoggedIn ? <ScorePage /> : <Navigate to="/login" />} />
        <Route path="/speedometer" element={isLoggedIn ? <Speedometer /> : <Navigate to="/login" />} />
        <Route path="/best5" element={isLoggedIn ? <Best5Page /> : <Navigate to="/login" />} />
        <Route path="/buildResume" element={isLoggedIn ? <TemplateSelectionPage /> : <Navigate to="/login" />} /> 
        <Route path="/build-resume/1" element={isLoggedIn ? <Template1 /> : <Navigate to="/login" />} />
        <Route path="/build-resume/2" element={isLoggedIn ? <Template2 /> : <Navigate to="/login" />} />
        <Route path="/build-resume/3" element={isLoggedIn ? <Template3 /> : <Navigate to="/login" />} />
        <Route path="/build-resume/4" element={isLoggedIn ? <Template4 /> : <Navigate to="/login" />} />
        <Route path="/build-resume/5" element={isLoggedIn ? <Template5 /> : <Navigate to="/login" />} />
        <Route path="/contact" element={isLoggedIn ? <Contact /> : <Navigate to="/login" />} />
        <Route path="/redirect" element={<RedirectPage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
