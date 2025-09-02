import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Register from './pages/Register';
import Login from './pages/Login'; // <-- Import your Login page component

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} /> {/* Add this line */}
    </Routes>
  );
}

export default App;
