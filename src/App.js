import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import SciFiScreen from './components/login/SciFiScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="/login" element={<SciFiScreen title="Login" screenStack={6} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
