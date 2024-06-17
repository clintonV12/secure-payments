import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import PasswordRecoveryPage from './components/PasswordRecoveryPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';  // Import custom styles

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/recover-password" element={<PasswordRecoveryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
