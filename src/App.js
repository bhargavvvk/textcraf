
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alerts from './components/Alerts';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import About from './components/About';


function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert('Darkmode Enabled', 'Success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Lightmode Enabled', 'Success');
    }
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  return (
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alerts alert={alert} />
      <Routes>
        <Route path="/" element={<Textform mode={mode} showAlert={showAlert} />} />
        <Route path="/about" element={<About mode={mode} />} />
      </Routes>
    </Router>
  );
}

export default App;

