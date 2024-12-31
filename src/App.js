
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  const [mode,setMode]=useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
    }
    else{
      setMode('light');
    }
  }
  return (
    <>
    <Navbar mode={mode} toggleMode={toggleMode}/>
    <Textform mode={mode}/>
    </>
  );
}

export default App;
