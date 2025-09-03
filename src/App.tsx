import { Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/account" element={<Profile />} />
    </Routes>
  );
}

export default App;
